import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  public loginForm!: FormGroup;
  readonly isSubmitting = signal(false);

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router

  ){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.loginForm.invalid || this.isSubmitting()) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);

    const { email, password } = this.loginForm.getRawValue();

    try {
      const isAuthenticated: boolean = await this.authService.login(email, password);

      if (!isAuthenticated) {
        // Consider setting a signal or field for error display
        return;
      }

      await this.router.navigate(['/dashboard']);
    } catch (error) {
      // Optionally log error using a logging service or set error state for UI feedback
    } finally {
      this.isSubmitting.set(false);
    }
  }
}


