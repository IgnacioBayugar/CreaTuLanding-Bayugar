import { getFirestore, collection, getDocs, getDoc, doc, query, addDoc, where } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

// Obtener todos los productos
export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return products;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// Obtener un producto por ID
export const getProductById = async (id) => {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      alert("Producto no encontrado");
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

// Filtrar productos por categoría
export const filterProducts = async (category) => {
  try {
    const q = query(collection(db, "products"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return products;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// Obtener todas las categorías únicas
export const getCategories = async () => {
  try {
    const products = await getProducts();
    const categories = [...new Set(products.map(prod => prod.category))];
    return categories;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// Crear una orden
export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
  } catch (err) {
    console.log(err);
    return null;
  }
};