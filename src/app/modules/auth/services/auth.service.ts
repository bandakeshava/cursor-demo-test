import { Injectable, computed, signal } from '@angular/core';

export interface SignUpPayload {
  name: string;
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly isAuthenticatedSignal = signal(false);
  readonly isAuthenticated = computed(() => this.isAuthenticatedSignal());

  async login(email: string, password: string): Promise<boolean> {
    // Mock request delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const isValid = email.length > 0 && password.length >= 6;
    this.isAuthenticatedSignal.set(isValid);
    return isValid;
  }

  async signUp(payload: SignUpPayload): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 600));
    const isValid = payload.email.length > 0 && payload.password.length >= 6 && payload.name.length >= 2;
    this.isAuthenticatedSignal.set(isValid);
    return isValid;
  }

  logout(): void {
    this.isAuthenticatedSignal.set(false);
  }
}


