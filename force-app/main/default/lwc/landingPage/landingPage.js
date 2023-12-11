import { LightningElement } from 'lwc';
import fitnessBGImageURL from '@salesforce/resourceUrl/fitnessBgImage';
import goalBGImageURL from '@salesforce/resourceUrl/goalBG';
import healthyMealBGURL from '@salesforce/resourceUrl/healthyMealBG';
import exerciseBGURL from '@salesforce/resourceUrl/exerciseBg';
import collaborateBGURL from '@salesforce/resourceUrl/collaborateBG';
import signUpBGURL from '@salesforce/resourceUrl/signUpBG';
const BACKGROUND_IMAGE_SETTINGS =
    'background-position: center; background-size: cover; background-repeat: no-repeat; background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))';

export default class LandingPage extends LightningElement {
    get backgroundHomeSection() {
        return this.generateBGImage(fitnessBGImageURL);
    }

    get backgroundGoalSection() {
        return this.generateBGImage(goalBGImageURL);
    }

    get backgroundMealSection() {
        return this.generateBGImage(healthyMealBGURL);
    }

    get backgroundExerciseSection() {
        return this.generateBGImage(exerciseBGURL);
    }

    get backgroundCollaborateSection() {
        return this.generateBGImage(collaborateBGURL);
    }

	get signUpSection() {
		return this.generateBGImage(signUpBGURL)
	}

    generateBGImage(bgImage) {
        return `${BACKGROUND_IMAGE_SETTINGS}, url(${bgImage});`;
    }
}
