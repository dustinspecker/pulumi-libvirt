// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";

export interface DomainBootDevice {
    devs?: string[];
}

export interface DomainConsole {
    /**
     * IP address to listen on. Defaults to 127.0.0.1.
     */
    sourceHost?: string;
    /**
     * Source path
     */
    sourcePath?: string;
    /**
     * Port number or a service name. Defaults to a
     * random port.
     */
    sourceService?: string;
    /**
     * Target port
     */
    targetPort: string;
    /**
     * for the first console and defaults to `serial`.
     * Subsequent `console` blocks must have a different type - usually `virtio`.
     */
    targetType?: string;
    /**
     * Console device type. Valid values are "pty" and "tcp".
     */
    type: string;
}

export interface DomainCpu {
    mode: string;
}

export interface DomainDisk {
    /**
     * The path to the host device to use as the block device for this disk.
     */
    blockDevice?: string;
    /**
     * The filename to use as the block device for this disk (read-only)
     */
    file?: string;
    /**
     * Use a scsi controller for this disk.  The controller
     * model is set to `virtio-scsi`
     */
    scsi?: boolean;
    /**
     * The http url to use as the block device for this disk (read-only)
     */
    url?: string;
    /**
     * The volume id to use for this disk.
     */
    volumeId?: string;
    /**
     * Specify a WWN to use for the disk if the disk is using
     * a scsi controller, if not specified then a random wwn is generated for the disk
     */
    wwn?: string;
}

export interface DomainFilesystem {
    accessmode?: string;
    readonly?: boolean;
    source: string;
    target: string;
}

export interface DomainGraphics {
    /**
     * defaults to "yes"
     */
    autoport?: boolean;
    /**
     * IP Address where the VNC listener should be started if
     * `listenType` is set to `address`. Defaults to 127.0.0.1
     */
    listenAddress?: string;
    /**
     * "listen type", defaults to "none"
     */
    listenType?: string;
    /**
     * Console device type. Valid values are "pty" and "tcp".
     */
    type?: string;
}

export interface DomainNetworkInterface {
    /**
     * An IP address for this domain in this network.
     */
    addresses: string[];
    /**
     * Provides a bridge from the VM directly to the LAN. This assumes
     * there is a bridge device on the host which has one or more of the hosts
     * physical NICs enslaved. The guest VM will have an associated _tun_ device
     * created and enslaved to the bridge. The IP range / network configuration is
     * whatever is used on the LAN. This provides the guest VM full incoming &
     * outgoing net access just like a physical machine.
     */
    bridge?: string;
    /**
     * A hostname that will be assigned to this domain
     * resource in this network.
     */
    hostname: string;
    /**
     * The specific MAC address to use for this interface.
     */
    mac: string;
    /**
     * Packets whose destination is on the same host as where they
     * originate from are directly delivered to the target macvtap device. Both
     * origin and destination devices need to be in bridge mode for direct delivery.
     * If either one of them is in vepa mode, a VEPA capable bridge is required.
     */
    macvtap?: string;
    networkId: string;
    networkName: string;
    /**
     * This feature attaches a virtual function of a SRIOV capable
     * NIC directly to a VM without losing the migration capability. All packets are
     * sent to the VF/IF of the configured network device. Depending on the
     * capabilities of the device additional prerequisites or limitations may apply;
     * for example, on Linux this requires kernel 2.6.38 or newer.
     */
    passthrough?: string;
    /**
     * All VMs' packets are sent to the external bridge. Packets whose
     * destination is a VM on the same host as where the packet originates from are
     * sent back to the host by the VEPA capable bridge (today's bridges are
     * typically not VEPA capable).
     */
    vepa?: string;
    /**
     * When creating the domain resource, wait until the
     * network interface gets a DHCP lease from libvirt, so that the computed IP
     * addresses will be available when the domain is up and the plan applied.
     */
    waitForLease?: boolean;
}

export interface DomainNvram {
    /**
     * The filename to use as the block device for this disk (read-only)
     */
    file: string;
    /**
     * path to the file used to override variables from the master NVRAM
     * store.
     */
    template?: string;
}

export interface DomainVideo {
    /**
     * Console device type. Valid values are "pty" and "tcp".
     */
    type?: string;
}

export interface DomainXml {
    xslt?: string;
}

export interface NetworkDhcp {
    /**
     * when false, disable the DHCP server
     */
    enabled?: boolean;
}

export interface NetworkDns {
    /**
     * when false, disable the DHCP server
     */
    enabled?: boolean;
    /**
     * Either `address`, `domain`, or both must be set
     */
    forwarders?: outputs.NetworkDnsForwarder[];
    /**
     * a DNS host entry block. You can have one or more of these
     * blocks in your DNS definition. You must specify both `ip` and `hostname`.
     */
    hosts?: outputs.NetworkDnsHost[];
    /**
     * true/false: true means 'do not forward unresolved requests for this domain to the part DNS server
     */
    localOnly?: boolean;
    /**
     * a DNS SRV entry block. You can have one or more of these blocks
     * in your DNS definition. You must specify `service` and `protocol`.
     */
    srvs?: outputs.NetworkDnsSrv[];
}

export interface NetworkDnsForwarder {
    address?: string;
    /**
     * The domain used by the DNS server.
     */
    domain?: string;
}

export interface NetworkDnsHost {
    hostname?: string;
    ip?: string;
}

export interface NetworkDnsSrv {
    /**
     * The domain used by the DNS server.
     */
    domain?: string;
    port?: string;
    priority?: string;
    protocol?: string;
    service?: string;
    target?: string;
    weight?: string;
}

export interface NetworkDnsmasqOptions {
    /**
     * a Dnsmasq option entry block. You can have one or more of these
     * blocks in your definition. You must specify both `optionName` and `optionValue`.
     */
    options?: outputs.NetworkDnsmasqOptionsOption[];
}

export interface NetworkDnsmasqOptionsOption {
    optionName?: string;
    optionValue?: string;
}

export interface NetworkRoute {
    cidr: string;
    gateway: string;
}

export interface NetworkXml {
    xslt?: string;
}

export interface PoolXml {
    xslt?: string;
}

export interface VolumeXml {
    xslt?: string;
}

