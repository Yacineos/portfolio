import { BlogComponent } from "./blog.component"
import {ComponentFixture, TestBed} from "@angular/core/testing"

describe('BlogComponent', () => {
    let component: BlogComponent;
    let fixture: ComponentFixture<BlogComponent>;

    beforeEach(() => {
        //create a module , doesn't matter if our component is standalone or not
        TestBed.configureTestingModule({
            imports: [BlogComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BlogComponent);
        component = fixture.componentInstance;
        //extremely important
        fixture.detectChanges();
    });

    it('create blog component',() => {
        expect(component).toBeTruthy();
    })
})