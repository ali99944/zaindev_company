import { motion } from 'framer-motion'
import React from 'react'
import CardLoader from './card-loader'

const GridLoader = () => {
    return (
        <motion.div
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-8 py-8"
            >
              <CardLoader />
              <CardLoader />
              <CardLoader />
          </motion.div>
      )
}

export default GridLoader