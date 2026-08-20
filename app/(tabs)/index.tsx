import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { HelloWave } from '@/components/hello-wave';

const batmanIdentities = [
  {
    name: 'Bruce Wayne',
    role: 'Bilionário • Empresário',
    image: require('@/assets/images/batman/bruce-wayne.jpg'),
  },
  {
    name: 'Batman',
    role: 'O Cavaleiro das Trevas',
    image: require('@/assets/images/batman/batman.jpg'),
  },
];

const allies = [
  {
    name: 'Alfred Pennyworth',
    role: 'Mordomo e mentor',
    image: require('@/assets/images/allies/alfred.jpg'),
  },
  {
    name: 'Comissário Gordon',
    role: 'GCPD',
    image: require('@/assets/images/allies/gordon.jpg'),
  },
  {
    name: 'Nightwing',
    role: 'Dick Grayson',
    image: require('@/assets/images/allies/nightwing.jpg'),
  },
  {
    name: 'Red Hood',
    role: 'Jason Todd',
    image: require('@/assets/images/allies/redhood.jpg'),
  },
  {
    name: 'Red Robin',
    role: 'Tim Drake',
    image: require('@/assets/images/allies/redrobin.jpg'),
  },
  {
    name: 'Barbara Gordon',
    role: 'Oracle / Batgirl',
    image: require('@/assets/images/allies/barbaragordon.jpg'),
  },
  {
    name: 'Robin',
    role: 'Damian Wayne',
    image: require('@/assets/images/allies/robin.jpg'),
  },

  {
    name: 'Batwoman',
    role: 'Kate Kane',
    image: require('@/assets/images/allies/batwoman.jpg'),
  },
  {
    name: 'Catwoman',
    role: 'Selina Kyle',
    image: require('@/assets/images/allies/catwoman.jpg'),
  },
  {
    name: 'Spoiler',
    role: 'Stephanie Brown',
    image: require('@/assets/images/allies/spoiler.jpg'),
  },
  {
    name: 'Bluebird',
    role: 'Harper Row',
    image: require('@/assets/images/allies/bluebird.jpg'),
  },
  {
    name: 'Black Bat',
    role: 'Cassandra Cain',
    image: require('@/assets/images/allies/blackbatman.jpg'),
  },
  {
    name: 'Batwing',
    role: 'Luke Fox',
    image: require('@/assets/images/allies/Batwing.jpg'),
  },
  {
    name: 'Azrael',
    role: 'Jean-Paul Valley',
    image: require('@/assets/images/allies/Azrael.jpg'),
  },
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#050505', dark: '#000000' }}
      headerImage={
        <View style={styles.headerContainer}>
          <Image
            source={require('@/assets/images/batman_header.jpg')}
            style={styles.batmanHeader}
            contentFit="cover"
          />

          <View style={styles.headerOverlay} />

          <View style={styles.batSignal}>
            <ThemedText style={styles.batSignalText}>BAT-SIGNAL</ThemedText>
          </View>
        </View>
      }
    >
      {/* TÍTULO */}
      <ThemedView style={styles.titleContainer}>
        <View>
          <ThemedText style={styles.kicker}>
            BEM VINDO A GOTHAM
          </ThemedText>

          <ThemedText type="title" style={styles.title}>
            BATMAN
          </ThemedText>

          <ThemedText style={styles.subtitle}>
            O Cavaleiro das Trevas
          </ThemedText>
        </View>

        <HelloWave />
      </ThemedView>

      {/* BRUCE WAYNE / BATMAN */}
<ThemedView style={styles.section}>
  <ThemedText style={styles.sectionTitle}>
    POR TRÁS DA MÁSCARA
  </ThemedText>

  <ThemedText style={styles.sectionDescription}>
    Duas faces. Uma única missão.
  </ThemedText>

  <View style={styles.identityGrid}>
    {batmanIdentities.map((identity) => (
      <View key={identity.name} style={styles.identityCard}>
        <Image
          source={identity.image}
          style={styles.identityImage}
          contentFit="cover"
        />

        <View style={styles.identityOverlay} />

        <View style={styles.identityInfo}>
          <ThemedText style={styles.identityName}>
            {identity.name}
          </ThemedText>

          <ThemedText style={styles.identityRole}>
            {identity.role}
          </ThemedText>
        </View>
      </View>
    ))}
  </View>
</ThemedView>

      {/* INTRO */}
      <ThemedView style={styles.card}>
        <ThemedText style={styles.cardTitle}>
          🦇 O CAVALEIRO DE GOTHAM
        </ThemedText>

        <ThemedText style={styles.cardText}>
          Batman é o lendário protetor de Gotham City.
          Por trás da máscara está Bruce Wayne,
          um bilionário que dedicou sua vida a combater o crime.
        </ThemedText>
      </ThemedView>

      {/* FATOS */}
      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>
          BATMAN FILES
        </ThemedText>

        <View style={styles.factGrid}>
          <View style={styles.factCard}>
            <ThemedText style={styles.factNumber}>01</ThemedText>
            <ThemedText style={styles.factTitle}>IDENTIDADE</ThemedText>
            <ThemedText style={styles.factText}>
              Bruce Wayne
            </ThemedText>
          </View>

          <View style={styles.factCard}>
            <ThemedText style={styles.factNumber}>02</ThemedText>
            <ThemedText style={styles.factTitle}>CIDADE</ThemedText>
            <ThemedText style={styles.factText}>
              Gotham City
            </ThemedText>
          </View>

          <View style={styles.factCard}>
            <ThemedText style={styles.factNumber}>03</ThemedText>
            <ThemedText style={styles.factTitle}>SÍMBOLO</ThemedText>
            <ThemedText style={styles.factText}>
              O Batman
            </ThemedText>
          </View>

          <View style={styles.factCard}>
            <ThemedText style={styles.factNumber}>04</ThemedText>
            <ThemedText style={styles.factTitle}>MISSÃO</ThemedText>
            <ThemedText style={styles.factText}>
              Justiça
            </ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* GOTHAM */}
      <ThemedView style={styles.gothamCard}>
        <ThemedText style={styles.gothamLabel}>
          LOCALIZAÇÃO
        </ThemedText>

        <ThemedText style={styles.gothamTitle}>
          GOTHAM CITY
        </ThemedText>

        <ThemedText style={styles.cardText}>
          A cidade que nunca dorme. Crime, corrupção e
          mistério fazem de Gotham o território do Cavaleiro
          das Trevas.
        </ThemedText>

        <Link href="/modal" asChild>
          <View style={styles.button}>
            <ThemedText style={styles.buttonText}>
              Conheça Gotham →
            </ThemedText>
          </View>
        </Link>
      </ThemedView>

      {/* ALIADOS */}
      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>
          ALIADOS
        </ThemedText>

        <ThemedText style={styles.sectionDescription}>
          Pessoas que lutam ao lado do Cavaleiro das Trevas.
        </ThemedText>

        <View style={styles.alliesGrid}>
          {allies.map((ally) => (
            <View key={ally.name} style={styles.allyCard}>
              <Image
                source={ally.image}
                style={styles.allyImage}
                contentFit="cover"
              />

              <View style={styles.allyOverlay} />

              <View style={styles.allyInfo}>
                <ThemedText style={styles.allyName}>
                  {ally.name}
                </ThemedText>

                <ThemedText style={styles.allyRole}>
                  {ally.role}
                </ThemedText>
              </View>
            </View>
          ))}
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },

  batmanHeader: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
  },

  batSignal: {
    position: 'absolute',
    bottom: 25,
    left: 25,
    borderLeftWidth: 4,
    borderLeftColor: '#F5C518',
    paddingLeft: 12,
  },

  batSignalText: {
    color: '#F5C518',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 3,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  kicker: {
    color: '#F5C518',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 4,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 42,
    lineHeight: 46,
    fontWeight: '900',
    letterSpacing: 3,
  },

  subtitle: {
    color: '#888888',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 2,
    marginTop: 4,
  },

  card: {
    backgroundColor: '#111111',
    borderWidth: 1,
    borderColor: '#292929',
    borderLeftWidth: 4,
    borderLeftColor: '#F5C518',
    borderRadius: 4,
    padding: 20,
  },

  cardTitle: {
    color: '#F5C518',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 12,
  },

  cardText: {
    color: '#B8B8B8',
    fontSize: 16,
    lineHeight: 25,
  },

  section: {
    backgroundColor: 'transparent',
    gap: 14,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 2,
  },

  factGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  factCard: {
    width: '48%',
    minHeight: 125,
    backgroundColor: '#0D0D0D',
    borderWidth: 1,
    borderColor: '#292929',
    borderRadius: 4,
    padding: 15,
  },

  factNumber: {
    color: '#F5C518',
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 15,
  },

  factTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },

  factText: {
    color: '#777777',
    fontSize: 14,
    marginTop: 5,
  },

  gothamCard: {
    backgroundColor: '#161616',
    borderRadius: 4,
    padding: 22,
    borderTopWidth: 3,
    borderTopColor: '#F5C518',
    gap: 10,
  },

  gothamLabel: {
    color: '#777777',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 3,
  },

  gothamTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 2,
  },

  button: {
    marginTop: 10,
    backgroundColor: '#F5C518',
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignItems: 'center',
  },

  buttonText: {
    color: '#050505',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1,
  },

  identityGrid: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: 12,
},

identityCard: {
  flex: 1,
  height: 260,
  backgroundColor: '#111111',
  borderWidth: 1,
  borderColor: '#292929',
  borderRadius: 5,
  overflow: 'hidden',
  position: 'relative',
},

identityImage: {
  width: '100%',
  height: '100%',
  position: 'absolute',
},

identityOverlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
},

identityInfo: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: 12,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  borderTopWidth: 2,
  borderTopColor: '#F5C518',
},

identityName: {
  color: '#FFFFFF',
  fontSize: 17,
  fontWeight: '900',
  letterSpacing: 0.5,
},

identityRole: {
  color: '#F5C518',
  fontSize: 11,
  fontWeight: '700',
  marginTop: 4,
},

  sectionDescription: {
    color: '#777777',
    fontSize: 14,
    lineHeight: 20,
    marginTop: -6,
  },

  alliesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 14,
  },

  allyCard: {
    width: '48%',
    height: 210,
    backgroundColor: '#111111',
    borderWidth: 1,
    borderColor: '#292929',
    borderRadius: 5,
    overflow: 'hidden',
    position: 'relative',
  },

  allyImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  allyOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },

  allyInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    borderTopWidth: 2,
    borderTopColor: '#F5C518',
  },

  allyName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  allyRole: {
    color: '#F5C518',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 3,
  },
  
});