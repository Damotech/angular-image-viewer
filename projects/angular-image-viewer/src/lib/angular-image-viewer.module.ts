import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AngularImageViewerComponent } from "./angular-image-viewer.component";
import { FullScreenDirective } from "./directives/full-screen.directive";

@NgModule({
  declarations: [AngularImageViewerComponent, FullScreenDirective],
  imports: [CommonModule, FormsModule],
  exports: [AngularImageViewerComponent, FullScreenDirective],
})
export class AngularImageViewerModule {}
