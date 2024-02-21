// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ClusterAPI {
    address?: string;
    externalAddress?: string;
    extraArgs?: {[key: string]: string};
    k0sApiPort?: number;
    port?: number;
    sans?: string[];
}

export interface ClusterCalico {
    envVars?: {[key: string]: string};
    flexVolumeDriverPath?: string;
    ipAutodetectionMethod?: string;
    mode?: string;
    mtu?: number;
    overlay?: string;
    vxlanPort?: number;
    vxlanVNI?: number;
    wireguard?: boolean;
}

export interface ClusterCalicoImage {
    cni?: outputs.ClusterImage;
    flexvolume?: outputs.ClusterImage;
    kubecontrollers?: outputs.ClusterImage;
    node?: outputs.ClusterImage;
}

export interface ClusterControllerManager {
    extraArgs?: {[key: string]: string};
}

export interface ClusterDualStack {
    IPv6podCIDR?: string;
    IPv6serviceCIDR?: string;
    enabled?: boolean;
}

export interface ClusterEnvoyProxy {
    apiServerBindPort?: number;
    image?: string;
    imagePullPolicy?: string;
    konnectivityServerBindPort?: number;
}

export interface ClusterEtcd {
    externalCluster?: outputs.ClusterEtcdExternalCluster;
    extraArgs?: {[key: string]: string};
    peerAddress?: string;
}

export interface ClusterEtcdExternalCluster {
    ca?: string;
    clientCert?: string;
    clientKey?: string;
    endpoints: string[];
    etcdPrefix?: string;
}

export interface ClusterFeatureGate {
    components?: string[];
    enabled?: boolean;
    name: string;
}

export interface ClusterFile {
    dirPerm?: string;
    dst?: string;
    dstDir?: string;
    group?: string;
    name?: string;
    perm?: string;
    src?: string;
    user?: string;
}

export interface ClusterHook {
    after?: string[];
    before?: string[];
}

export interface ClusterHooks {
    apply?: outputs.ClusterHook;
    backup?: outputs.ClusterHook;
    reset?: outputs.ClusterHook;
}

export interface ClusterHost {
    environment?: {[key: string]: string};
    files?: outputs.ClusterFile[];
    hooks?: outputs.ClusterHooks;
    hostname?: string;
    installFlags?: string[];
    k0sBinaryPath?: string;
    localhost?: outputs.ClusterLocalhost;
    noTaints?: boolean;
    os?: string;
    privateAddress?: string;
    privateInterface?: string;
    role: string;
    ssh?: outputs.ClusterSSH;
    uploadBinary?: boolean;
    winRM?: outputs.ClusterWinRM;
}

export interface ClusterImage {
    image?: string;
    version?: string;
}

export interface ClusterImages {
    calico?: outputs.ClusterCalicoImage;
    coredns?: outputs.ClusterImage;
    default_pull_policy?: string;
    konnectivity?: outputs.ClusterImage;
    kubeproxy?: outputs.ClusterImage;
    kuberouter?: outputs.ClusterKubeRouterImage;
    metricsserver?: outputs.ClusterImage;
    pause?: outputs.ClusterImage;
    repository?: string;
}

export interface ClusterInstallConfig {
    users?: outputs.ClusterInstallConfigUser;
}

export interface ClusterInstallConfigUser {
    etcdUser?: string;
    kineUser?: string;
    konnectivityUser?: string;
    kubeAPIserverUser?: string;
    kubeSchedulerUser?: string;
}

export interface ClusterK0s {
    config?: outputs.ClusterK0sConfig;
    dynamicConfig?: boolean;
    version?: string;
    versionChannel?: string;
}

export interface ClusterK0sConfig {
    metadata?: outputs.ClusterMetadata;
    spec?: outputs.ClusterK0sSpec;
}

export interface ClusterK0sSpec {
    api?: outputs.ClusterAPI;
    controllerManager?: outputs.ClusterControllerManager;
    featureGates?: outputs.ClusterFeatureGate[];
    images?: outputs.ClusterImages;
    installConfig?: outputs.ClusterInstallConfig;
    konnectivity?: outputs.ClusterKonnectivity;
    network?: outputs.ClusterNetwork;
    podSecurityPolicy?: outputs.ClusterPodSecurityPolicy;
    scheduler?: outputs.ClusterScheduler;
    storage?: outputs.ClusterStorage;
    telemetry?: outputs.ClusterTelemetry;
    workerProfiles?: outputs.ClusterWorkerProfile[];
}

export interface ClusterKine {
    dataSource: string;
}

export interface ClusterKonnectivity {
    adminPort?: number;
    agentPort?: number;
}

export interface ClusterKubeProxy {
    disabled?: boolean;
    iptables?: outputs.ClusterKubeProxyIPTables;
    ipvs?: outputs.ClusterKubeProxyIPVS;
    mode?: string;
    nodePortAddresses?: string;
}

export interface ClusterKubeProxyIPTables {
    masqueradeAll?: boolean;
    masqueradeBit?: number;
    minSyncPeriod?: string;
    syncPeriod?: string;
}

export interface ClusterKubeProxyIPVS {
    excludeCIDRs?: string;
    minSyncPeriod?: string;
    scheduler?: string;
    strictARP?: boolean;
    syncPeriod?: string;
    tcpFinTimeout?: string;
    tcpTimeout?: string;
    udpTimeout?: string;
}

export interface ClusterKubeRouter {
    autoMTU?: boolean;
    extraArgs?: {[key: string]: string};
    hairpin?: string;
    ipMasq?: boolean;
    metricsPort?: number;
    mtu?: number;
}

export interface ClusterKubeRouterImage {
    cni?: outputs.ClusterImage;
    cniInstaller?: outputs.ClusterImage;
}

export interface ClusterLocalhost {
    enabled?: boolean;
}

export interface ClusterMetadata {
    name: string;
}

export interface ClusterNetwork {
    calico?: outputs.ClusterCalico;
    clusterDomain?: string;
    dualStack?: outputs.ClusterDualStack;
    kubeProxy?: outputs.ClusterKubeProxy;
    kuberouter?: outputs.ClusterKubeRouter;
    nodeLocalLoadBalancing?: outputs.ClusterNodeLocalLoadBalancing;
    podCIDR?: string;
    provider?: string;
    serviceCIDR?: string;
}

export interface ClusterNodeLocalLoadBalancing {
    enabled?: boolean;
    envoyProxy?: outputs.ClusterEnvoyProxy;
    type?: string;
}

export interface ClusterPodSecurityPolicy {
    defaultPolicy?: string;
}

export interface ClusterSSH {
    address: string;
    bastion?: outputs.ClusterSSH;
    hostKey?: string;
    key?: string;
    port?: number;
    user?: string;
}

export interface ClusterScheduler {
    extraArgs?: {[key: string]: string};
}

export interface ClusterSpec {
    hosts: outputs.ClusterHost[];
    k0s?: outputs.ClusterK0s;
}

export interface ClusterStorage {
    etcd?: outputs.ClusterEtcd;
    kine?: outputs.ClusterKine;
    type?: string;
}

export interface ClusterTelemetry {
    enabled?: boolean;
}

export interface ClusterWinRM {
    address: string;
    bastion?: outputs.ClusterSSH;
    caCert?: string;
    cert?: string;
    insecure?: boolean;
    key?: string;
    password?: string;
    port?: number;
    tlsServerName?: string;
    useHTTPS?: boolean;
    useNTLM?: boolean;
    user?: string;
}

export interface ClusterWorkerProfile {
    name: string;
    values: {[key: string]: any};
}

