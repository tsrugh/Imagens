import React, { Component } from 'react';
import { Container, Tab, Tabs, Text, TabHeading } from 'native-base';
import First from './src/Components/Abas/First'
import Second from './src/Components/Abas/Second'
import Third from './src/Components/Abas/Third'
import Fourth from './src/Components/Abas/Fourth'
import Fifth from './src/Components/Abas/Fifth'
import styles from './src/Styles/sApp'


export default class App extends Component {

  render() {
    return (
      <Container>
        
        <Tabs initialPage={0}>

          <Tab  style={styles.container} heading={ <TabHeading style={styles.header}><Text style={styles.texto}>Corona</Text></TabHeading>} >
            <First/>
          </Tab>

          <Tab style={styles.container} heading={ <TabHeading style={styles.header}><Text style={styles.texto}>Camera</Text></TabHeading>}>
            <Second/>
          </Tab>

          <Tab style={styles.container} heading={ <TabHeading style={styles.header}><Text style={styles.texto}>Bugatti</Text></TabHeading>}>
            <Third/>
          </Tab>

          <Tab style={styles.container} heading={ <TabHeading style={styles.header}><Text style={styles.texto}>Galeria</Text></TabHeading>}>
            <Fourth/>
          </Tab>

          <Tab style={styles.container} heading={ <TabHeading style={styles.header}><Text style={styles.texto}>Srius</Text></TabHeading>}>
            <Fifth/>
          </Tab>

        </Tabs>

      </Container>
    );
  }
}