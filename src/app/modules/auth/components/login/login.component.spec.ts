import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';

class AuthServiceMock {
  login = jasmine.createSpy('login').and.returnValue(Promise.resolve(true));
}

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let authService: AuthServiceMock;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as unknown as AuthServiceMock;
    router = TestBed.inject(Router);
    spyOn(router, 'navigate').and.resolveTo(true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render email and password controls', () => {
    const emailInput = fixture.debugElement.query(By.css('#email'));
    const passwordInput = fixture.debugElement.query(By.css('#password'));
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  it('should have invalid form initially and disable submit button', () => {
    expect(component.loginForm.invalid).toBeTrue();
    fixture.detectChanges();
    const submitButton: HTMLButtonElement = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(submitButton.disabled).toBeTrue();
  });

  it('should show validation messages when controls are touched and invalid', () => {
    component.loginForm.controls['email'].markAsTouched();
    component.loginForm.controls['password'].markAsTouched();
    fixture.detectChanges();

    const emailFeedback = fixture.debugElement.query(By.css('#email ~ .invalid-feedback'));
    const passwordFeedback = fixture.debugElement.query(By.css('#password ~ .invalid-feedback'));
    expect(emailFeedback).toBeTruthy();
    expect(passwordFeedback).toBeTruthy();
  });

  it('should call AuthService.login with form values on valid submit and navigate to /dashboard', fakeAsync(() => {
    component.loginForm.setValue({ email: 'a@b.com', password: '123456' });
    expect(component.loginForm.valid).toBeTrue();

    component.onSubmit();
    expect(component.isSubmitting()).toBeTrue();

    // Resolve async login promise
    tick();
    fixture.detectChanges();

    expect(authService.login).toHaveBeenCalledWith('a@b.com', '123456');
    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
    expect(component.isSubmitting()).toBeFalse();
  }));

  it('should not navigate on failed login and should clear submitting state', fakeAsync(() => {
    authService.login.and.returnValue(Promise.resolve(false));
    component.loginForm.setValue({ email: 'a@b.com', password: '123456' });

    component.onSubmit();
    expect(component.isSubmitting()).toBeTrue();

    tick();
    fixture.detectChanges();

    expect(router.navigate).not.toHaveBeenCalled();
    expect(component.isSubmitting()).toBeFalse();
  }));

  it('should keep button disabled while submitting', fakeAsync(() => {
    component.loginForm.setValue({ email: 'a@b.com', password: '123456' });

    component.onSubmit();
    fixture.detectChanges();
    let submitButton: HTMLButtonElement = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(submitButton.disabled).toBeTrue();

    tick();
    fixture.detectChanges();
    submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(submitButton.disabled).toBeFalse();
  }));
});


