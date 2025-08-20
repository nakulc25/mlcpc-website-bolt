# Security Fixes Implementation Guide

## Immediate Security Fixes Required

### 1. Environment Variables Setup
Create `.env` file for sensitive configuration:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_udmbcw8
VITE_EMAILJS_TEMPLATE_ID=template_18ibdta
VITE_EMAILJS_PUBLIC_KEY=FFFI7_Hn1VJ2H_Bk4

# Analytics
VITE_GTM_ID=GTM-XXXXXXX
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Booking
VITE_CALENDLY_URL=https://calendly.com/nakul-mclpc
```

### 2. Input Sanitization Library
Install DOMPurify for XSS protection:
```bash
npm install dompurify @types/dompurify
```

### 3. Content Security Policy Headers
Add to `index.html`:
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  connect-src 'self' https://api.emailjs.com;
  frame-src https://calendly.com;
">
```

### 4. URL Validation Function
```typescript
const isValidUrl = (url: string): boolean => {
  const allowedDomains = ['calendly.com', 'mclpc.ca'];
  try {
    const urlObj = new URL(url);
    return allowedDomains.some(domain => urlObj.hostname.endsWith(domain));
  } catch {
    return false;
  }
};
```

### 5. File Download Authorization
```typescript
const authorizeFileDownload = async (filePath: string): Promise<boolean> => {
  // Implement server-side authorization check
  const allowedFiles = ['/data/henaa-mall-cv.pdf', '/data/nakul-chhibbar-cv.pdf'];
  return allowedFiles.includes(filePath);
};
```

## Performance Optimization Fixes

### 1. Code Splitting Implementation
```typescript
// Lazy load components
const AboutUs = lazy(() => import('./pages/AboutUs'));
const PracticeAreaTemplate = lazy(() => import('./components/PracticeAreaTemplate'));

// Wrap in Suspense
<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path="/about" element={<AboutUs />} />
    <Route path="/practice-areas/:slug" element={<PracticeAreaTemplate />} />
  </Routes>
</Suspense>
```

### 2. Image Optimization
```typescript
// Implement lazy loading
const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
      )}
    </div>
  );
};
```

### 3. Error Boundary Implementation
```typescript
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Log to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Something went wrong</h2>
          <p>We apologize for the inconvenience. Please try refreshing the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
```

## Testing Implementation

### 1. Unit Test Example
```typescript
// Contact.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../components/Contact';

describe('Contact Component', () => {
  test('sanitizes user input', async () => {
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const maliciousInput = '<script>alert("xss")</script>John Doe';
    
    fireEvent.change(nameInput, { target: { value: maliciousInput } });
    
    expect(nameInput.value).not.toContain('<script>');
  });

  test('validates email format', async () => {
    render(<Contact />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const invalidEmail = 'invalid-email';
    
    fireEvent.change(emailInput, { target: { value: invalidEmail } });
    fireEvent.blur(emailInput);
    
    await waitFor(() => {
      expect(screen.getByText(/invalid email format/i)).toBeInTheDocument();
    });
  });
});
```

### 2. Integration Test Example
```typescript
// App.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('renders without crashing', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  expect(screen.getByText(/Mall & Chhibbar Legal/i)).toBeInTheDocument();
});

test('handles 404 routes correctly', () => {
  window.history.pushState({}, 'Test page', '/non-existent-route');
  
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  expect(screen.getByText(/404/i)).toBeInTheDocument();
});
```

## Monitoring and Logging

### 1. Error Logging Service
```typescript
// errorLogger.ts
export const logError = (error: Error, context?: string) => {
  const errorData = {
    message: error.message,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href
  };

  // Send to logging service (e.g., Sentry, LogRocket)
  console.error('Application Error:', errorData);
};
```

### 2. Performance Monitoring
```typescript
// performance.ts
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  
  console.log(`${name} took ${end - start} milliseconds`);
  
  // Send to analytics
  if (window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(end - start)
    });
  }
};
```