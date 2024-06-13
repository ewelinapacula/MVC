import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post.component';
import { BlogService } from '../blog.service';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ],
      declarations: [ PostComponent ],
      providers: [ BlogService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with title and content inputs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titleInput = compiled.querySelector('input#title');
    const contentTextarea = compiled.querySelector('textarea#content');
    expect(titleInput).toBeTruthy();
    expect(contentTextarea).toBeTruthy();
  });

  it('should call onSubmit method when form is submitted', () => {
    spyOn(component, 'onSubmit');
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    form?.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
