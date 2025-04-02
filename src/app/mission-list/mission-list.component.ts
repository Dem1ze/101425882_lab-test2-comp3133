import { Component, type OnInit } from "@angular/core"
import type { Mission } from "../models/mission.model"
import { SpacexService } from "../services/spacex.service"

@Component({
  selector: "app-mission-list",
  templateUrl: "./mission-list.component.html",
  styleUrls: ["./mission-list.component.scss"],
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = []
  filteredMissions: Mission[] = []
  selectedMission: Mission | null = null
  displayedColumns: string[] = ["flight_number", "mission_name", "launch_year", "details", "actions"]

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.loadMissions()
  }

  loadMissions(): void {
    this.spacexService.getMissions().subscribe(
      (data) => {
        this.missions = data
        this.filteredMissions = [...this.missions]
      },
      (error) => {
        console.error("Error fetching missions:", error)
      },
    )
  }

  onYearSelected(year: string): void {
    if (year) {
      this.filteredMissions = this.missions.filter((mission) => mission.launch_year === year)
    } else {
      this.filteredMissions = [...this.missions]
    }
  }

  selectMission(mission: Mission): void {
    this.selectedMission = mission
  }
}
