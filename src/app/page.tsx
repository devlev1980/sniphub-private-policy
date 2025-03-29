import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - SnippetsApp',
  description: 'Privacy Policy for SnippetsApp - Your Code Snippet Management Tool',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy for SnippetsApp</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: March 2024</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            SnippetsApp ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our iOS application for managing code snippets.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">1. Account Information</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Email address</li>
              <li>Display name (optional)</li>
              <li>Authentication data (managed securely through Firebase Authentication)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">2. User Content</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Code snippets</li>
              <li>Snippet descriptions</li>
              <li>Tags and tag colors</li>
              <li>Favorite snippets</li>
              <li>Timestamps of creation and modifications</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">3. Usage Data</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>App preferences</li>
              <li>Theme settings</li>
              <li>Language preferences</li>
              <li>Search history within the app</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">1. Account Management</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>To create and manage your account</li>
              <li>To authenticate your identity</li>
              <li>To provide account recovery services</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">2. App Functionality</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>To store and manage your code snippets</li>
              <li>To organize snippets with tags</li>
              <li>To enable favorite snippet functionality</li>
              <li>To provide search and filtering capabilities</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">3. Data Storage</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Your data is stored securely in Firebase</li>
              <li>Snippets are associated with your account and are private to you</li>
              <li>We do not share your snippets with other users</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">1. Authentication</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>We use Firebase Authentication for secure user authentication</li>
              <li>Passwords are hashed and never stored in plain text</li>
              <li>Two-factor authentication is supported through Google Sign-In</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">2. Data Protection</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>All data is encrypted in transit and at rest</li>
              <li>Access to your data is restricted to your account only</li>
              <li>We implement industry-standard security measures to protect your information</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">1. Firebase</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>We use Firebase for:</li>
              <li className="ml-6">Authentication</li>
              <li className="ml-6">Data storage</li>
              <li className="ml-6">Real-time database functionality</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-3">2. Google Sign-In</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>We offer Google Sign-In as an authentication option</li>
              <li>This service is governed by Google's Privacy Policy</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">1. Data Access</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>You can access your snippets and account information through the app</li>
                <li>You can export your snippets at any time</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">2. Data Deletion</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>You can delete your account and all associated data</li>
                <li>Deletion requests will be processed within 30 days</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">3. Data Correction</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>You can update your account information</li>
                <li>You can modify or delete your snippets at any time</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:string1980@gmail.com" className="text-blue-600 hover:text-blue-800">
              string1980@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">California Privacy Rights</h2>
          <p className="text-gray-700 mb-4">For California residents:</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>We do not sell your personal information</li>
            <li>We do not share your personal information with third parties for marketing purposes</li>
            <li>You have the right to know what personal information we collect and how we use it</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Users</h2>
          <p className="text-gray-700">
            By using our app, you consent to the transfer of your information to the United States and its processing in the United States.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance</h2>
          <p className="text-gray-700 mb-4">We comply with:</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>General Data Protection Regulation (GDPR)</li>
            <li>California Consumer Privacy Act (CCPA)</li>
            <li>App Store Privacy Guidelines</li>
          </ul>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            By using our app, you consent to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </footer>
      </div>
    </main>
  )
}
