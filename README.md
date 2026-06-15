# 🔐 PrivyPrint – Decentralized Secure Printing Platform

## Overview

PrivyPrint is a Web3-powered secure document printing platform designed to eliminate privacy risks in traditional print-shop workflows. Instead of sharing documents through messaging apps or email, users securely upload encrypted files that are stored on IPFS and controlled through blockchain-based access permissions.

The platform ensures that only the designated print shop can decrypt and print a document within a predefined time window, while preserving user privacy and preventing unauthorized file retention.

---

## Problem Statement

Traditional printing workflows require users to share documents via WhatsApp, email, or USB drives, exposing:

* Personal phone numbers
* Sensitive document contents
* Permanent file retention on print-shop systems
* Unauthorized copying and misuse

PrivyPrint addresses these concerns using encryption, decentralized storage, and blockchain-based access control.

---

## Key Features

### 🔑 Wallet-Based Authentication

* MetaMask integration
* Secure wallet identity verification
* Sender and Print Shop role separation

### 🔒 End-to-End Encryption

* AES-256 client-side document encryption
* Encryption occurs before upload
* No plaintext document leaves the user's device

### 🌐 Decentralized Storage

* Encrypted files stored on IPFS via Pinata
* Tamper-resistant content addressing
* No centralized file storage

### ⛓ Blockchain Access Control

* Solidity smart contracts
* On-chain print job creation
* Immutable audit trail
* Secure access management

### ⏳ Time-Bound Access

* Configurable expiry duration
* Automatic access expiration
* Reduced attack surface

### 🚫 Access Revocation

* Sender can revoke access before printing
* Smart-contract enforced permissions

### 🖨 Secure Printing Workflow

* Print shop decrypts files locally
* Native browser print interface
* No permanent local storage required

---

## System Architecture

```text
Sender
   │
   ▼
Encrypt File (AES-256)
   │
   ▼
Upload Ciphertext to IPFS
   │
   ▼
Store CID + Metadata on Blockchain
   │
   ▼
Print Shop Receives Job
   │
   ▼
Decrypt Access Key
   │
   ▼
Fetch & Decrypt File
   │
   ▼
Secure Print
   │
   ▼
On-Chain Confirmation
```

---

## Technology Stack

### Frontend

* Next.js 15
* TypeScript
* Tailwind CSS
* Framer Motion

### Blockchain

* Solidity
* Hardhat
* Ethers.js
* Ganache

### Storage

* IPFS
* Pinata

### Security

* AES-256 Encryption
* MetaMask Encryption APIs

### Backend

* Next.js API Routes
* MongoDB
* Mongoose
* NextAuth.js

---

## Smart Contract Features

### Print Job Creation

Creates a blockchain record containing:

* IPFS CID
* Receiver Wallet Address
* Expiry Timestamp
* Print Type
* Number of Copies
* Encrypted Access Key

### Job Management

* Active Jobs
* Completed Jobs
* Revoked Jobs
* Expired Jobs

### Access Control

* Receiver-only decryption
* Sender-controlled revocation
* Blockchain-verified permissions

---

## User Roles

### 👤 Document Sender

* Upload document
* Select print shop
* Configure print settings
* Set expiry duration
* Monitor active jobs
* Revoke access

### 🖨 Print Shop

* View incoming queue
* Securely decrypt jobs
* Preview documents
* Print documents
* Confirm completion

---

## Security Model

### Zero-PII Storage

PrivyPrint never stores:

* Phone numbers
* Document contents
* Personal identifiers

### Trustless Architecture

* Blockchain controls permissions
* No trusted intermediary required

### Confidentiality

* Files remain encrypted on IPFS
* Only intended receiver can access content

---

## Future Enhancements

* Polygon Amoy Deployment
* Mobile Application
* Multi-Print-Shop Support
* Automated Print Server Integration
* QR-Based Job Sharing
* Enterprise Secure Printing

---

## Project Team

* S Rohith
* OV Yogeswar Reddy
* Dadapir Nadaf
* Aman Sharma

Department of Computer Science & Engineering
(IoT & Cybersecurity including Blockchain)
B.M.S College of Engineering

---

## License

This project is developed for academic and research purposes.

---
## Recommended
  Recommended by Rylai Technologies for developing PrivyPrint, an innovative Web3-based secure printing platform leveraging blockchain, IPFS, and encryption for privacy-preserving document handling.
---

**"Print Securely. Share Privately. Trust Cryptography, Not People."** 🔐🚀
