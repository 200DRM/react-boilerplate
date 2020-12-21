import { LaunchPast } from './LaunchPast';
import { Rocket } from './Rocket';
import { RocketViewModel } from './RocketViewModel';

export class LaunchPastViewModel {
  public readonly articleLink : string;
  public readonly id : number;
  public readonly missionId : string;
  public readonly missionName : string;
  public readonly launchDateLocal : Date;
  public readonly image : string;
  public readonly rocket : RocketViewModel;

  constructor(data : LaunchPast) {
    const rocketData : Rocket = {
      id: data.rocket.rocket.id,
      name: data.rocket.rocket.name,
      type: data.rocket.rocket.type,
      company: data.rocket.rocket.company,
      country: data.rocket.rocket.country 
    };
    this.articleLink = data.links.article_link;
    this.id = data.id;
    this.image = data.links.flickr_images[0];
    this.launchDateLocal = new Date(data.launch_date_local);
    this.missionId = data.mission_id;
    this.missionName = data.mission_name;
    this.rocket = new RocketViewModel(rocketData);
  }
}