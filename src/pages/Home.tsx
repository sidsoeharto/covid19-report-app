import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel>
              <h1>Title</h1>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              <h1>Title</h1>
            </IonLabel>
          </IonItem>
        </IonList>  
      </IonContent>
    </IonPage>
  );
};

export default Home;
