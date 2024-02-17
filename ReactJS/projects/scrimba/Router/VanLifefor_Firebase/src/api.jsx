import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc, getDocs, getDoc, query, where } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyCA6ziO1iC2rYYlbgPQYGSxKr49pmZcC4o',
  authDomain: 'vanlifereact.firebaseapp.com',
  projectId: 'vanlifereact',
  storageBucket: 'vanlifereact.appspot.com',
  messagingSenderId: '383437363921',
  appId: '1:383437363921:web:b3bb14448283b51f7bc3f0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Refactoring the fetching functions below

const vansCollectionsRef = collection(db, 'vans')

export async function getVans() {
  const snapshot = await getDocs(vansCollectionsRef)
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))
  return vans
}

export async function getVan(id) {
  const docRef = doc(db, 'vans', id)
  const snapshot = await getDoc(docRef)
  if (snapshot.exists()) {
    const single = snapshot.data()
    console.log(single.name)

    return { ...snapshot.data() }
    //return snapshot.data()
  }
}

export async function getHostVans() {
  const q = query(vansCollectionsRef, where('hostId', '==', '123'))
  const snapshot = await getDocs(q)
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))
  return vans
}

// export async function getVans(id) {
//   const url = id ? `/api/vans/${id}` : '/api/vans'
//   const res = await fetch(url)
//   if (!res.ok) {
//     throw {
//       message: 'Faield to fetch vans',
//       statusText: res.statusText,
//       status: res.status,
//     }
//   }
//   const data = await res.json()
//   return data.vans
// }

// export async function getHostVans(id) {
//   const url = id ? `/api/host/vans/${id}` : '/api/host/vans'
//   const res = await fetch(url)
//   if (!res.ok) {
//     throw {
//       message: 'Failed to fetch vans',
//       statusText: res.statusText,
//       status: res.status,
//     }
//   }
//   const data = await res.json()
//   return data.vans
// }

export async function loginUser(creds) {
  const res = await fetch('/api/login', { method: 'post', body: JSON.stringify(creds) })
  const data = await res.json()

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    }
  }

  return data
}
