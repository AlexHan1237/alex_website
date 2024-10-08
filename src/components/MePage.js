import { Typography } from '@mui/material';
import '../index.css';

const MePage = () => {

    return (
        <div style={{ flexgrow: 1 }}>
                <img src="img/react.png" alt="Alex Han" class="inset-image"/>
            <Typography paragraph>
                <h2>
                    When to seek emergency medical attention
                </h2>
                <p>Look for <strong>emergency warning signs*</strong>&nbsp;for COVID-19. If someone is showing any of these signs, <strong>seek emergency medical care</strong> <strong>immediately:</strong></p>
                <div class="warning-signs-public">
                    <div class="">
                        <ul>
                            <li>Trouble breathing</li>
                            <li>Persistent pain or pressure in the chest</li>
                            <li>New confusion</li>
                            <li>Inability to wake or stay awake</li>
                            <li>Pale, gray, or blue-colored skin, lips, or nail beds, depending on skin tone</li>
                        </ul>
                    </div>
                </div>
                <p>*This list is not all possible symptoms. Please call your medical provider for any other symptoms that are severe or concerning to you.</p>
                <p><strong>Call 911 or call ahead to your local emergency facility: </strong>Notify the operator that you are seeking care for someone who has or may have COVID-19.</p>

            </Typography>
        </div >
    );
};


export default MePage;