import 'dotenv/config'

export default function blogEnabled() {return "true" === process.env.BLOG_ENABLED;}