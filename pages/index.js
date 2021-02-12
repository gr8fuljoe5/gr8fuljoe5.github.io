import { useState } from 'react'
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
  const MAIN_CONTENT = {
    visible: () => {
      return {
        opacity: 1,
        transition: {
          when: 'beforeChildren',
          staggerChildren: 1,
        },
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 1,
      },
    },
  }

  const ICON_TRAY = {
    visible: () => {
      return {
        opacity: 1,
        transition: {
          when: 'beforeChildren',
          staggerChildren: 0.1,
        },
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  }

  const TEXT = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const PARAGRAPH = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -300 },
  }

  const PARAGRAPH_REVERSE = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 300 },
  }

  const ICONS = {
    visible: {
      opacity: 1,
      y: 0,
      rotate: 360,
    },
    hidden: { opacity: 0, y: 500, rotate: 0 },
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

      <motion.main className={styles.main}>
        <section>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <motion.section
                variants={MAIN_CONTENT}
                initial="hidden"
                animate="visible"
              >
                <h1 className={styles.title}>
                  <motion.span variants={TEXT}>Hello...</motion.span>{' '}
                  <motion.span variants={TEXT}>I'm Joe Kanakaraj</motion.span>
                </h1>
                <motion.p className={styles.description} variants={PARAGRAPH}>
                  But everyone just calls me Joe K.
                </motion.p>
                <motion.p
                  className={styles.description}
                  variants={PARAGRAPH_REVERSE}
                >
                  I'm a Lead Software Engineer at{' '}
                  <a href="http://www.rightpoint.com" target="_blank">
                    Rightpoint
                  </a>
                  .
                </motion.p>
                <motion.p className={styles.description} variants={PARAGRAPH}>
                  I was born and raised in{' '}
                  <a href="https://en.wikipedia.org/wiki/Dobbs_Ferry,_New_York">
                    Dobbs Ferry, NY
                  </a>{' '}
                  and I currently live in{' '}
                  <a href="https://www.bkmag.com/" target="_blank">
                    Brooklyn
                  </a>
                  .
                </motion.p>
                <motion.p
                  className={styles.description}
                  variants={PARAGRAPH_REVERSE}
                ></motion.p>
                <motion.p className={styles.description} variants={PARAGRAPH}>
                  I graduated from Syracuse University with a degree in
                  Information Management and Technology and I have 20+ years
                  experience in the field of Front-end Engineering.
                </motion.p>
                <motion.p
                  className={styles.description}
                  variants={PARAGRAPH_REVERSE}
                >
                  My hobbies include snowboarding, baseball and fine IPA's.
                </motion.p>
              </motion.section>
            </Grid>
          </Grid>
        </section>

        <motion.section variants={ICON_TRAY} initial="hidden" animate="visible">
          <Grid
            container
            spacing={3}
            alignItems="center"
            justify="space-between"
          >
            <Grid item xs={6} md={2} className={styles.icon}>
              <motion.div
                // whileHover={{
                //   scale: [1, 2],
                //   rotate: [0, 360],
                // }}
                // whileTap={{ scale: 0.9 }}
                variants={ICONS}
                custom={0}
              >
                <GitHubIcon />
              </motion.div>
            </Grid>
            <Grid item xs={6} md={2} className={styles.icon}>
              <motion.div
                // whileHover={{
                //   scale: [1, 2, 1],
                //   rotate: [0, 360, 0],
                // }}
                // whileTap={{ scale: 0.9 }}
                variants={ICONS}
                custom={2}
              >
                <TwitterIcon className={styles.twitter} variants={ICONS} />
              </motion.div>
            </Grid>
            <Grid item xs={6} md={2} className={styles.icon}>
              <motion.div variants={ICONS}>
                <FacebookIcon className={styles.fb} />
              </motion.div>
            </Grid>
            <Grid item xs={6} md={2} className={styles.icon}>
              <motion.div variants={ICONS}>
                <InstagramIcon className={styles.instagram} />
              </motion.div>
            </Grid>
            <Grid item xs={6} md={2} className={styles.icon}>
              <motion.div variants={ICONS}>
                <LinkedInIcon className={styles.linkedIn} />
              </motion.div>
            </Grid>
            <Grid item xs={6} md={2} className={styles.icon}>
              <motion.div variants={ICONS}>
                <EmailIcon />
              </motion.div>
            </Grid>
          </Grid>
        </motion.section>
      </motion.main>
    </div>
  )
}
