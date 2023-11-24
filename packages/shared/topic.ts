export enum IotTopic {
    TopicHostFromRobot = `mediasoup/host/{hostId}/from-robot/request-host`,
    TopicRobotFromHost = `mediasoup/robot/{machineId}/from-host`,
    TopicFromViewer = `mediasoup/host/{hostId}/from-viewer`,
    TopicViewerFromHost = `mediasoup/viewer/{viewerId}/from-host`

    // TopicRobotFromHost = 'mediasoup/robot/%s/from-host',
    // topicBroadcastFromBroker = 'mediasoup/host/all/from-broker',
    // topicFromBroker = `mediasoup/host/%s/from-broker`,
    // topicFromViewer = `mediasoup/host/%s/from-viewer`,
    // topicFromRobot = `mediasoup/host/%s/from-robot`,
    // topicFromPeer = `mediasoup/host/%s/from-peer`,
    // topicBrokerFromHost = `mediasoup/broker/from-host`,

    // TopicPeerFromHost = `mediasoup/peer/%s/from-host`,
    // TopicNewPeerFromHost = `mediasoup/peer/newpeer/from-host`,
    // TopicReportFromHost = 'mediasoup/robot/%s/from-host',
}

export const BuildTopic = {
    buildTopicHostFromMachine: (hostId: string) => {
        return IotTopic.TopicHostFromRobot.replace('{hostId}', hostId);
    },

    buildTopicHostFromViewer: (hostId: string) => {
        return IotTopic.TopicFromViewer.replace('{hostId}', hostId);
    },

    buildTopicRobotFromHost: (robot: string) => {
        return IotTopic.TopicRobotFromHost.replace('{machineId}', robot);
    },

    buildTopicViewerFromHost: (viewer: string) => {
        return IotTopic.TopicViewerFromHost.replace('{viewerId}', viewer);
    },

    requestHostTopic: () => {
        return IotTopic.TopicHostFromRobot.replace('{hostId}', 'requestHost');
    },

    requestHostTopicViewer: () => {
        return IotTopic.TopicFromViewer.replace('{hostId}', 'requestHost');
    }
};
