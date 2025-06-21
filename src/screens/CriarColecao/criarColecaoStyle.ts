import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  header: {
    backgroundColor: '#000',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'left',
    marginLeft: 20,
  },

  enviarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },

  formArea: {
    flexGrow: 1,
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  label: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 6,
  },

  input: {
    backgroundColor: 'transparent',
    color: '#aaa',
    paddingVertical: 10,
    paddingHorizontal: 0,
    marginBottom: 20,
  },

  descricao: {
    height: 100,
    textAlignVertical: 'top',
  },

  switchArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#1a1a1a',
  },

  switchLabel: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
    marginTop: 2,
  },

  helpCircleCustom: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  helpText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 18,
  },
});