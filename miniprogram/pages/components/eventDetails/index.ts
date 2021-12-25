import { IEvent } from "../../../app";

// pages/components/eventDetails/eventDetails.js
interface EventDetails {
  event: IEvent;
}

Component({
  /**
   * Component properties
   */
  properties: {
    event: {
      type: Object,
      value: {}
    }
  },

  /**
   * Component initial data
   */
  data: {

  } as EventDetails,

  /**
   * Component methods
   */
  methods: {

  }
})
