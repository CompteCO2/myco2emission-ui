import { makeAutoObservable } from "mobx";

/**
 * A controller for comsumption by house.
 */
export class HouseConsumption {
  // type.
  public type = "";

  // a french department.
  public department = "";

  // a flat surface.
  public surface = 60;

  // building yaer.
  public buildingYear = 1980;

  // consumption.
  public consumption = 5000;

  /**
   * constructor
   */
  constructor() {
    makeAutoObservable(this);
  }

  // setter for department.
  public setDepartment(department: string): void {
    this.department = department;
  }

  // setter for surface.
  public setSurface(surface: number): void {
    this.surface = surface;
  }

  // setter for building year.
  public setBuildingYear(buildingYear: number): void {
    this.buildingYear = buildingYear;
  }

  // setter for consumptions.
  public setConsumption(consumption: number): void {
    this.consumption = consumption;
  }

  // setter for type.
  public setType(type: string): void {
    this.type = type;
  }
}
