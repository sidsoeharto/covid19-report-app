import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const LoginAdmin: React.FC = () => {
    return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Login Page</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent fullscreen>
					<IonHeader collapse="condense">
						<IonToolbar>
							<IonTitle size="large">Login here</IonTitle>
						</IonToolbar>
					</IonHeader>
				</IonContent>
			</IonPage>
    );
}

export default LoginAdmin;