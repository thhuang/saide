'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const App = dynamic(() => import('../../App'), { ssr: false })

export function ClientOnly() {
      return (
        <div className="h-screen flex flex-col justify-center gap-y-8 place-items-center">
          <h1 className="font-sans font-semibold text-5xl bold mb-10">
            Super Awesome IDE
          </h1>
          <div className="flex flex-row gap-x-2">
            <a
              className="btn btn-primary"
              // href="http://localhost:8080/oauth2/authorization/github"
            //   onClick={() => navigate('/main')}
            >
              Login
            </a>
            <a className="btn"
            // onClick={() => navigate('/editor')}
            >
              Guest
            </a>
          </div>
        </div>
      );
}