import { Component, type OnInit, Output, EventEmitter } from "@angular/core"
import { FormControl } from "@angular/forms"

@Component({
  selector: "app-mission-filter",
  templateUrl: "./mission-filter.component.html",
  styleUrls: ["./mission-filter.component.scss"],
})
export class MissionFilterComponent implements OnInit {
  yearControl = new FormControl("")
  years: string[] = []

  @Output() yearChanged = new EventEmitter<string>()

  constructor() {
    // Generate years from 2006 (first SpaceX launch) to current year
    const currentYear = new Date().getFullYear()
    for (let year = 2006; year <= currentYear; year++) {
      this.years.push(year.toString())
    }
  }

  ngOnInit(): void {}

  onYearChange(): void {
    this.yearChanged.emit(this.yearControl.value)
  }
}

