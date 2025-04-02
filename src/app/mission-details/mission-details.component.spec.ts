import { Component, Input, type OnChanges, type SimpleChanges } from "@angular/core"
import type { Mission } from "../models/mission.model"

@Component({
  selector: "app-mission-details",
  templateUrl: "./mission-details.component.html",
  styleUrls: ["./mission-details.component.scss"],
})
export class MissionDetailsComponent implements OnChanges {
  @Input() mission: Mission | null = null

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["mission"] && changes["mission"].currentValue) {
      console.log("Mission details updated:", this.mission)
    }
  }
}

