interface LogLevel {
  ERROR: 'error';
  WARN: 'warn';
  INFO: 'info';
  DEBUG: 'debug';
}

const LOG_LEVELS: LogLevel = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug'
};

interface LogEntry {
  level: keyof LogLevel;
  message: string;
  timestamp: string;
  context?: Record<string, any>;
  error?: Error;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private logs: LogEntry[] = [];
  private maxLogs = 1000;

  private createLogEntry(
    level: keyof LogLevel,
    message: string,
    context?: Record<string, any>,
    error?: Error
  ): LogEntry {
    return {
      level,
      message,
      timestamp: new Date().toISOString(),
      context,
      error
    };
  }

  private addLog(entry: LogEntry) {
    this.logs.push(entry);
    
    // Keep only the most recent logs
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs);
    }
  }

  private shouldLog(level: keyof LogLevel): boolean {
    if (this.isDevelopment) return true;
    
    // In production, only log warnings and errors
    return level === 'error' || level === 'warn';
  }

  error(message: string, error?: Error, context?: Record<string, any>) {
    const entry = this.createLogEntry('ERROR', message, context, error);
    this.addLog(entry);
    
    if (this.shouldLog('ERROR')) {
      console.error(`[ERROR] ${message}`, { error, context });
    }

    // In production, send to error reporting service
    if (!this.isDevelopment && error) {
      this.reportError(error, message, context);
    }
  }

  warn(message: string, context?: Record<string, any>) {
    const entry = this.createLogEntry('WARN', message, context);
    this.addLog(entry);
    
    if (this.shouldLog('WARN')) {
      console.warn(`[WARN] ${message}`, context);
    }
  }

  info(message: string, context?: Record<string, any>) {
    const entry = this.createLogEntry('INFO', message, context);
    this.addLog(entry);
    
    if (this.shouldLog('INFO')) {
      console.info(`[INFO] ${message}`, context);
    }
  }

  debug(message: string, context?: Record<string, any>) {
    const entry = this.createLogEntry('DEBUG', message, context);
    this.addLog(entry);
    
    if (this.shouldLog('DEBUG')) {
      console.debug(`[DEBUG] ${message}`, context);
    }
  }

  private reportError(error: Error, message: string, context?: Record<string, any>) {
    // Example integration with error reporting service
    // Replace with your preferred service (Sentry, LogRocket, etc.)
    
    const errorData = {
      message: error.message,
      stack: error.stack,
      customMessage: message,
      context,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId() // Implement based on your auth system
    };

    // Example: Send to error reporting service
    // errorReportingService.captureException(errorData);
    
    console.error('Error reported:', errorData);
  }

  private getUserId(): string | null {
    // Implement based on your authentication system
    // For now, return null as there's no auth system
    return null;
  }

  // Get recent logs for debugging
  getRecentLogs(count: number = 50): LogEntry[] {
    return this.logs.slice(-count);
  }

  // Clear logs (useful for testing)
  clearLogs() {
    this.logs = [];
  }

  // Performance logging
  measurePerformance<T>(name: string, fn: () => T): T {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    const duration = end - start;
    
    this.info(`Performance: ${name}`, { duration: `${duration.toFixed(2)}ms` });
    
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'timing_complete', {
        name: name,
        value: Math.round(duration)
      });
    }
    
    return result;
  }

  // Async performance logging
  async measureAsyncPerformance<T>(name: string, fn: () => Promise<T>): Promise<T> {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    const duration = end - start;
    
    this.info(`Async Performance: ${name}`, { duration: `${duration.toFixed(2)}ms` });
    
    return result;
  }
}

// Export singleton instance
export const logger = new Logger();

// Export types for external use
export type { LogEntry };
export { LOG_LEVELS };