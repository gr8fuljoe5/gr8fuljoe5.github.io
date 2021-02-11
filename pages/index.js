import Head from 'next/head'
import { useEffect } from 'react'
import { motion, useAnimation, useMotionValue, animate } from 'framer-motion'
import styles from '../styles/Home.module.css'

import Grid from '@material-ui/core/Grid'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'

export default function Home() {
  const section = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.9,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }

  const text = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const paragraph = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -300 },
  }

  const paragraph_reverse = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 300 },
  }

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
            <motion.section
              initial="hidden"
              animate="visible"
              variants={section}
            >
              <h1 className={styles.title}>
                <motion.span variants={text}>Hello...</motion.span>{' '}
                <motion.span variants={text}>I'm Joe Kanakaraj</motion.span>
              </h1>
              <motion.p className={styles.description} variants={paragraph}>
                But everyone just calls me Joe K.
              </motion.p>
              <motion.p
                className={styles.description}
                variants={paragraph_reverse}
              >
                I'm a Lead Software Engineer at <a href="#">Rightpoint</a>.
              </motion.p>
              <motion.p className={styles.description} variants={paragraph}>
                I was born and raised in Dobbs Ferry, NY and I recieved my
                degree in Information Management and Technology from Syracuse
                University.
              </motion.p>
              <motion.p
                className={styles.description}
                variants={paragraph_reverse}
              >
                My hobbies include snowboarding, baseball and fine IPA's.
              </motion.p>
            </motion.section>
          </Grid>
          <Grid item xs={6} md={2} className={styles.icon}>
            <motion.div
              whileHover={{
                scale: [1, 2],
                rotate: [0, 360],
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
