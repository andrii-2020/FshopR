const production = {
    apiUrl: `${process.env.REACT_APP_API_URL}`,
    enableLogs: false,
    features: {
        analytics: true,
        experimentalFeatures: false
    }
}

export default production