/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F313633561521340110%2F&psig=AOvVaw16aV_mT9LeVFEtQVTkBhSr&ust=1703067442904000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiwhYjmm4MDFQAAAAAdAAAAABAD',
                port:"",
                pathname:"/**"
            }
        ]
    }
}

module.exports = nextConfig
