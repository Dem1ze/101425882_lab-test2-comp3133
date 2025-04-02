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

  // Helper methods to safely access nested properties
  getRocketName(): string {
    return this.mission?.rocket?.rocket_name || "Unknown"
  }

  getRocketType(): string {
    return this.mission?.rocket?.rocket_type || "Unknown"
  }

  getMissionPatch(): string | null {
    return this.mission?.links?.mission_patch_small || null
  }

  getArticleLink(): string | null {
    return this.mission?.links?.article_link || null
  }

  getWikipediaLink(): string | null {
    return this.mission?.links?.wikipedia || null
  }

  getVideoLink(): string | null {
    return this.mission?.links?.video_link || null
  }
}

