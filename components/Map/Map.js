'use client';

import React from 'react';
import styles from './map.module.css';

export default function GoogleMap() {
  const address = {
    name: "Klenn Couverture",
    email: "klenngurtner@gmail.com",
    phone: "06 98 14 42 22",
    fullAddress: "Loire-Atlantique",
  };

  return (
    <div className={styles.mapWrapper}>
       <div className={styles.addressDetails}>
        <h2 className={styles.name}>{address.name}</h2>
        <p className={styles.span}>
          <strong 
          >Zone d'intervention :</strong> {address.fullAddress}
        </p>
        <p className={styles.span}>
          <strong>Téléphone :</strong> {address.phone}
        </p>
        <p className={styles.span}>
          <strong>Email :</strong> {address.email}
        </p>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173368.7924508065!2d-1.724796408285334!3d47.23834870571156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ee81f0a8aead%3A0x40d37521e0ded30!2sNantes!5e0!3m2!1sfr!2sfr!4v1746276564642!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
     
    </div>
  );
}
