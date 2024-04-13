import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E63946',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E63946',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E63946',
  },
  listItemSeparator: {
    height: 1,
    backgroundColor: '#E63946',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F1FAEE',
  },
  label: {
    fontSize: 20,
    marginBottom: 15,
    color: '#E63946',
  },
  input: {
    height: 50,
    borderColor: '#E63946',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 30,
    fontSize: 18,
    color: '#E63946',
  },
  button: {
    backgroundColor: '#A8DADC',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#1D3557',
    fontWeight: 'bold',
  },
});
