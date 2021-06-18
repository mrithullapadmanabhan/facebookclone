import React from 'react'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post'

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            <Post 
            profilePics='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png'
            message='yoo this is a messsage'
            timestamp='1601493943737'
            imgName='imgName'
            username='Frankie'
            />
        </div>
    )
}

export default Feed
