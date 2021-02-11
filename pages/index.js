import Head from 'next/head'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'

import Grid from '@material-ui/core/Grid'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joe Kanakaraj: Software Engineer</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 className={styles.title}>Hello, I'm Joe Kanakaraj.</h1>
          </Grid>
          <Grid item xs={12}>
            <motion.p animate={{ scale: 1 }} className={styles.description}>
              But everyone just calls me Joe K.
            </motion.p>
          </Grid>
          <Grid item xs={12}>
            <p className={styles.description}>
              I'm a Lead Software Engineer at Rightpoint.
            </p>
          </Grid>
          <Grid item xs={12}>
            <p className={styles.description}>
              I was born and raised in Dobbs Ferry, NY and I recieved my degree
              in Information Management and Technology from Syracuse University.
            </p>
          </Grid>
          <Grid item xs={12}>
            <p className={styles.description}>
              My hobbies include snowboarding, baseball and fine IPA's.
            </p>
          </Grid>
          <Grid item xs={6} md={2} className={styles.icon}>
            <motion.div
              whileHover={{
                scale: [1, 2, 1],
                rotate: [0, 360, 0],
              }}
              whileTap={{ scale: 0.9 }}
            >
              <GitHubIcon />
            </motion.div>
          </Grid>
          <Grid item xs={6} md={2} className={styles.icon}>
            <motion.div
              whileHover={{
                scale: [1, 2, 1],
                rotate: [0, 360, 0],
              }}
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon className={styles.twitter} />
            </motion.div>
          </Grid>
          <Grid item xs={6} md={2} className={styles.icon}>
            <FacebookIcon className={styles.fb} />
          </Grid>
          <Grid item xs={6} md={2} className={styles.icon}>
            <InstagramIcon />
          </Grid>
          <Grid item xs={6} md={2} className={styles.icon}>
            <LinkedInIcon className={styles.linkedIn} />
          </Grid>
          <Grid item xs={6} md={2} className={styles.icon}>
            <EmailIcon />
          </Grid>
        </Grid>
      </main>
    </div>
  )
}
