import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },

  cardDorama: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
  },

  imagemDorama: {
    width: 150,
    height: 80,
  },

  infoDorama: {
    flex: 1,
  },

  tituloDorama: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  detalhesDorama: {
    color: '#CCC',
    fontSize: 12,
    marginBottom: 6,
  },

  avaliacao: {
    color: '#aaa',
    fontSize: 14,
  },

  menuIcon: {
    color: '#FFF',
    fontSize: 30,
    paddingHorizontal: 6,
  },

  divisor: {
    height: 2,
    backgroundColor: '#333',
    marginVertical: 12,
  },

  topSection: {
    height: 220,
    position: 'relative',
    backgroundColor: 'transparent',
    marginBottom: 18,
  },

  headerIcons: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  iconImage: {
    width: 28,
    height: 28,
    marginTop: 8,
  },

  backgroundPattern: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 0,
  },

  avatarRow: {
    position: 'absolute',
    bottom: 16,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginRight: 12,
  },

  profileText: {
    justifyContent: 'center',
  },

  profileTitle: {
    color: '#FFF',
    fontSize: 19,
    fontWeight: 'bold',
  },

  profileSubtitle: {
    color: '#ccc',
    fontSize: 10,
  },

  description: {
    color: '#fff',
    fontSize: 14,
    paddingHorizontal: 14,
    marginTop: 9,
    lineHeight: 50,
  },

  sectionDivider: {
    height: 2,
    backgroundColor: '#333',
    marginVertical: 10,
    marginHorizontal: 5,
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 16,
    marginBottom: 20,
  },

  statsText: {
    color: '#fff',
    fontSize: 16,
  },

  commentSection: {
    marginTop: 16,
    marginHorizontal: 5,
  },

  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  commentIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  commentText: {
    color: '#aaa',
    fontSize: 16,
  },

  commentDivider: {
    height: 1,
    marginVertical: 3,
  },

  fab: {
    position: 'absolute',
    right: 20,
    bottom: 60,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  fabIcon: {
    width: 74,
    height: 74,
    resizeMode: 'contain',
  },
});