import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

const Landing: React.FC = () => {
    return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Welcome to Covid Report App</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent fullscreen>
          <h1>This is our Landing Page</h1>
          <IonButton href="/login" expand="block">Login as User</IonButton>
          <IonButton href="/loginadmin" expand="block">Login as Admin</IonButton>
				</IonContent>
			</IonPage>
    );
}

export default Landing