import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"

// Angular Material Imports
import { MatTableModule } from "@angular/material/table"
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule } from "@angular/material/card"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatSelectModule } from "@angular/material/select"
import { MatDividerModule } from "@angular/material/divider"
import { MatIconModule } from "@angular/material/icon"

import { MissionListComponent } from "./mission-list/mission-list.component"
import { MissionFilterComponent } from "./mission-filter/mission-filter.component"
import { MissionDetailsComponent } from "./mission-details/mission-details.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule,
    MissionListComponent,
    MissionFilterComponent,
    MissionDetailsComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppModule { }