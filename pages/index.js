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
    hidden: { opacity: 0, x: -100 },
  }

  const PARAGRAPH_REVERSE = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
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
                  </a>{' '}
                  with 20+ years of experience in front-end engineering. .
                </motion.p>
                <motion.p className={styles.description} variants={PARAGRAPH}>
                  I was born and raised in{' '}
                  <a
                    href="https://en.wikipedia.org/wiki/Dobbs_Ferry,_New_York"
                    target="_blank"
                    className={styles.df}
                  >
                    Dobbs Ferry, NY
                  </a>{' '}
                  and I currently live in{' '}
                  <a
                    className={styles.nets}
                    href="https://en.wikipedia.org/wiki/East_Williamsburg,_Brooklyn"
                    target="_blank"
                  >
                    East Williamsburg, Brooklyn
                  </a>
                  .
                </motion.p>
                <motion.p
                  className={styles.description}
                  variants={PARAGRAPH_REVERSE}
                ></motion.p>
                <motion.p className={styles.description} variants={PARAGRAPH}>
                  I graduated from{' '}
                  <a
                    href="http://www.syr.edu/"
                    className={styles.cuse}
                    target="_blank"
                  >
                    Syracuse University
                  </a>{' '}
                  with a degree in{' '}
                  <a
                    href="https://ischool.syr.edu/"
                    target="_blank"
                    className={styles.cuse}
                  >
                    Information Management and Technology
                  </a>
                  .
                </motion.p>
                <motion.p
                  className={styles.description}
                  variants={PARAGRAPH_REVERSE}
                >
                  My hobbies include snowboarding, golfing, fine IPA's, being
                  the Worlds Greatest Uncle&trade; and following the{' '}
                  <a
                    href="http://www.yankees.com"
                    className={styles.yankees}
                    target="_blank"
                  >
                    Yankees
                  </a>
                  ,{' '}
                  <a
                    href="https://www.newyorkjets.com/"
                    className={styles.jets}
                    target="_blank"
                  >
                    Jets
                  </a>
                  ,{' '}
                  <a
                    href="https://www.nba.com/nets/"
                    className={styles.nets}
                    target="_blank"
                  >
                    Nets
                  </a>
                  ,{' '}
                  <a
                    href="https://cuse.com/"
                    className={styles.cuse}
                    target="_blank"
                  >
                    Syracuse Atheltics
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.whufc.com/"
                    className={styles.whu}
                    target="_blank"
                  >
                    West Ham United
                  </a>
                  .
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
              <motion.div whileTap={{ scale: 0.9 }} variants={ICONS} custom={0}>
                <a href="https://github.com/gr8fuljoe5" target="_blank">
                  <GitHubIcon />
                </a>
              </motion.div>
            </Grid>
            <Grid item xs={6} md={2} className={styles.icon}>
              <motion.div whileTap={{ scale: 0.9 }} variants={ICONS} custom={2}>
                <TwitterIcon className={styles.twitter} variants={ICONS} />
              </motion.div>
            </Grid>
            <Grid item xs={6} md={2} className={styles.icon}>
              <motion.div whileTap={{ scale: 0.9 }} variants={ICONS}>
                <FacebookIcon className={styles.fb} />
              </motion.div>
            </Grid>
            <Grid item xs={6} md={2} className={styles.icon}>
              <motion.div whileTap={{ scale: 0.9 }} variants={ICONS}>
                <InstagramIcon className={styles.instagram} />
              </motion.div>
            </Grid>
            <Grid item xs={6} md={2} className={styles.icon}>
              <motion.div whileTap={{ scale: 0.9 }} variants={ICONS}>
                <LinkedInIcon className={styles.linkedIn} />
              </motion.div>
            </Grid>
            <Grid item xs={6} md={2} className={styles.icon}>
              <motion.div whileTap={{ scale: 0.9 }} variants={ICONS}>
                <EmailIcon />
              </motion.div>
            </Grid>
          </Grid>
        </motion.section>
      </motion.main>
    </div>
  )
}
