export interface LaunchPast {
  id : number;
  mission_id : string;
  mission_name : string;
  launch_date_local : string;
  links : {
    article_link : string;
    flickr_images : string[];
  };
  rocket : {
    rocket : {
      id : string;
      name : string;
      type : string;
      company : string;
      country : string;
    }
  }
};