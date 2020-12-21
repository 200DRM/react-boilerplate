import { LaunchPast } from './LaunchPast';

export class LaunchPastViewModel {
  public readonly articleLink : string;
  public readonly id : number;
  public readonly missionId : string;
  public readonly missionName : string;
  public readonly launchDateLocal : Date;
  public readonly image : string;
  public readonly rocketId : string;
  public readonly rocketName : string;
  public readonly rocketType : string;
  public readonly rocketCompany : string;
  public readonly rocketCountry : string;

  constructor(data : LaunchPast) {
    this.articleLink = data.links.article_link;
    this.id = data.id;
    this.image = data.links.flickr_images[0];
    this.launchDateLocal = new Date(data.launch_date_local);
    this.missionId = data.mission_id;
    this.missionName = data.mission_name;
    this.rocketId = data.rocket.rocket.id;
    this.rocketName = data.rocket.rocket.name;
    this.rocketType = data.rocket.rocket.type;
    this.rocketCompany = data.rocket.rocket.company;
    this.rocketCountry = data.rocket.rocket.country;
  }
}