import { IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem } from '@ionic/react';
import { IonGrid, IonRow, IonCol, IonContent, IonButton, IonLabel, IonText, IonModal } from '@ionic/react';
import OtpInput from 'react-otp-input';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../firebaseConfig';
import './LoginPage.css';

const Login: React.FC = () => {
	let history = useHistory();
	const [phoneNumber, setPhoneNumber] = useState<string>('')
	const [label, setLabel] = useState<string>()
	const [showModal, setShowModal] = useState(false)
	const [otp, setOTP] = useState<string>('')
	const [isOTP, setIsOTP] = useState<boolean>(false)

	const handleLogin = () => {
		let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
		firebase.auth().signInWithPhoneNumber(phoneNumber, recaptcha)
			.then(function(e) {
				setShowModal(true)
				if (isOTP) {
					e.confirm(otp)
						.then(result => {
							console.log(result.user, 'user')
							setShowModal(false)
							setIsOTP(false)
							history.push('/home')
						})
						.catch(error => {
							console.log(error, 'this is error')
						})
				} else return;
			})
	}

	const submitOTP = () => {
		setIsOTP(true)
		console.log(isOTP)
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Login Page</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonGrid>
					<IonRow class="ion-align-items-center">
						<IonCol size="12" class="ion-text-center">
							<IonItem>
								<IonLabel position="floating">Phone Number</IonLabel>
								<IonInput type="tel" value={phoneNumber} pattern="[0-9]*" onIonChange={e => setPhoneNumber(e.detail.value!)} placeholder="Insert your phone number"></IonInput>
							</IonItem>
						</IonCol>
					</IonRow>
					{label ?
							<IonRow class="ion-align-items-center">
								<IonText>{label}</IonText>
							</IonRow>
						: <IonRow></IonRow>
					}

					<IonRow class="ion-align-items-center">
						<IonCol size="12" class="ion-text-center">
							<IonButton 
								class="ion-align-self-center" 
								color="primary" 
								fill="outline"
								onClick={e => {handleLogin()}}
							>
								Send Verification Code
							</IonButton>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<div id="recaptcha"></div>
						</IonCol>
					</IonRow>
				</IonGrid>
				<IonModal isOpen={showModal}>
					<IonGrid>
						<IonRow>
							<IonCol class="ion-align-text-center">
								<OtpInput
									value={otp}
									onChange={(e:any) => {setOTP(e); console.log(e)}}
									numInputs={6}
									separator={<span>-</span>}
								/>
							</IonCol>
						</IonRow>
						<IonRow>
							<IonCol class="ion-align-text-center">
								<IonButton onClick={submitOTP}>Submit OTP</IonButton>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonModal>
			</IonContent>
		</IonPage>
	);
}

export default Login