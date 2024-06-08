import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() { 

function hadleParticipantAdd() {

}

function hadleParticipantRemove() {
  console.log("Removeu");
}

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Native
      </Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor="#6B6B6B"
          />
          <TouchableOpacity style={styles.button} onPress={hadleParticipantAdd}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
      </View>

      <Participant name="Adrielly" onRemove={hadleParticipantRemove}/>
      <Participant name="Matheus"/>
      <Participant name="Sync cunhao cara de cu"/>
    </View>
    
  )
}

