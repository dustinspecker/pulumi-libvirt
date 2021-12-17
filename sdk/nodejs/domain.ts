// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * Manages a VM domain resource within libvirt. For more information see
 * [the official documentation](https://libvirt.org/formatdomain.html).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as libvirt from "@pulumi/libvirt";
 *
 * const defaultDomain = new libvirt.Domain("default", {});
 * ```
 */
export class Domain extends pulumi.CustomResource {
    /**
     * Get an existing Domain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DomainState, opts?: pulumi.CustomResourceOptions): Domain {
        return new Domain(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'libvirt:index/domain:Domain';

    /**
     * Returns true if the given object is an instance of Domain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Domain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Domain.__pulumiType;
    }

    /**
     * The architecture for the VM (probably x8664 or i686),
     * you normally won't need to set this unless you are building a special VM
     */
    public readonly arch!: pulumi.Output<string>;
    /**
     * Set to `true` to start the domain on host boot up.
     * If not specified `false` is assumed.
     */
    public readonly autostart!: pulumi.Output<boolean | undefined>;
    /**
     * A list of devices (dev) which defines boot order. Example
     * below.
     */
    public readonly bootDevices!: pulumi.Output<outputs.DomainBootDevice[] | undefined>;
    /**
     * The `libvirt.CloudInitDisk` disk that has to be used by
     * the domain. This is going to be attached as a CDROM ISO. Changing the
     * cloud-init won't cause the domain to be recreated, however the change will
     * have effect on the next reboot.
     */
    public readonly cloudinit!: pulumi.Output<string | undefined>;
    /**
     * Arguments to the kernel
     */
    public readonly cmdlines!: pulumi.Output<{[key: string]: any}[] | undefined>;
    public readonly consoles!: pulumi.Output<outputs.DomainConsole[] | undefined>;
    /**
     * The
     * [libvirt.Ignition](https://www.terraform.io/docs/providers/libvirt/r/coreos_ignition.html) resource
     * that is to be used by the CoreOS domain.
     */
    public readonly coreosIgnition!: pulumi.Output<string | undefined>;
    /**
     * Configures CPU mode. See below for more
     * details.
     */
    public readonly cpu!: pulumi.Output<outputs.DomainCpu | undefined>;
    /**
     * The description for domain.
     * Changing this forces a new resource to be created.
     * This data is not used by libvirt in any way, it can contain any information the user wants.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * An array of one or more disks to attach to the domain. The
     * `disk` object structure is documented below.
     */
    public readonly disks!: pulumi.Output<outputs.DomainDisk[] | undefined>;
    /**
     * The path of the emulator to use
     */
    public readonly emulator!: pulumi.Output<string>;
    /**
     * An array of one or more host filesystems to attach to
     * the domain. The `filesystem` object structure is documented
     * below.
     */
    public readonly filesystems!: pulumi.Output<outputs.DomainFilesystem[] | undefined>;
    /**
     * The UEFI rom images for exercising UEFI secure boot in a qemu
     * environment. Users should usually specify one of the standard _Open Virtual Machine
     * Firmware_ (_OVMF_) images available for their distributions. The file will be opened
     * read-only.
     */
    public readonly firmware!: pulumi.Output<string | undefined>;
    /**
     * The name of the firmware config path where ignition file is stored: default is `opt/com.coreos/config`. If you are using [Flatcar Linux](https://docs.flatcar-linux.org/os/booting-with-libvirt/#creating-the-domain-xml), the value is `opt/org.flatcar-linux/config`.
     */
    public readonly fwCfgName!: pulumi.Output<string | undefined>;
    public readonly graphics!: pulumi.Output<outputs.DomainGraphics | undefined>;
    /**
     * The path of the initrd to boot.
     */
    public readonly initrd!: pulumi.Output<string | undefined>;
    /**
     * The path of the kernel to boot
     */
    public readonly kernel!: pulumi.Output<string | undefined>;
    /**
     * The machine type,
     * you normally won't need to set this unless you are running on a platform that
     * defaults to the wrong machine type for your template
     */
    public readonly machine!: pulumi.Output<string>;
    /**
     * The amount of memory in MiB. If not specified the domain
     * will be created with 512 MiB of memory be used.
     */
    public readonly memory!: pulumi.Output<number | undefined>;
    public readonly metadata!: pulumi.Output<string | undefined>;
    /**
     * A unique name for the resource, required by libvirt.
     * Changing this forces a new resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * An array of one or more network interfaces to
     * attach to the domain. The `networkInterface` object structure is documented
     * below.
     */
    public readonly networkInterfaces!: pulumi.Output<outputs.DomainNetworkInterface[] | undefined>;
    /**
     * this block allows specifying the following attributes related to the _nvram_:
     */
    public readonly nvram!: pulumi.Output<outputs.DomainNvram | undefined>;
    /**
     * By default is disabled, set to true for enabling it. More info [qemu-agent](https://wiki.libvirt.org/page/Qemu_guest_agent).
     */
    public readonly qemuAgent!: pulumi.Output<boolean | undefined>;
    /**
     * Use `false` to turn off the instance. If not specified,
     * true is assumed and the instance, if stopped, will be started at next apply.
     */
    public readonly running!: pulumi.Output<boolean | undefined>;
    /**
     * TPM device to attach to the domain. The `tpm` object structure is documented below.
     */
    public readonly tpm!: pulumi.Output<outputs.DomainTpm | undefined>;
    /**
     * The amount of virtual CPUs. If not specified, a single CPU
     * will be created.
     */
    public readonly vcpu!: pulumi.Output<number | undefined>;
    public readonly video!: pulumi.Output<outputs.DomainVideo | undefined>;
    public readonly xml!: pulumi.Output<outputs.DomainXml | undefined>;

    /**
     * Create a Domain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DomainArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DomainArgs | DomainState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DomainState | undefined;
            inputs["arch"] = state ? state.arch : undefined;
            inputs["autostart"] = state ? state.autostart : undefined;
            inputs["bootDevices"] = state ? state.bootDevices : undefined;
            inputs["cloudinit"] = state ? state.cloudinit : undefined;
            inputs["cmdlines"] = state ? state.cmdlines : undefined;
            inputs["consoles"] = state ? state.consoles : undefined;
            inputs["coreosIgnition"] = state ? state.coreosIgnition : undefined;
            inputs["cpu"] = state ? state.cpu : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["disks"] = state ? state.disks : undefined;
            inputs["emulator"] = state ? state.emulator : undefined;
            inputs["filesystems"] = state ? state.filesystems : undefined;
            inputs["firmware"] = state ? state.firmware : undefined;
            inputs["fwCfgName"] = state ? state.fwCfgName : undefined;
            inputs["graphics"] = state ? state.graphics : undefined;
            inputs["initrd"] = state ? state.initrd : undefined;
            inputs["kernel"] = state ? state.kernel : undefined;
            inputs["machine"] = state ? state.machine : undefined;
            inputs["memory"] = state ? state.memory : undefined;
            inputs["metadata"] = state ? state.metadata : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["networkInterfaces"] = state ? state.networkInterfaces : undefined;
            inputs["nvram"] = state ? state.nvram : undefined;
            inputs["qemuAgent"] = state ? state.qemuAgent : undefined;
            inputs["running"] = state ? state.running : undefined;
            inputs["tpm"] = state ? state.tpm : undefined;
            inputs["vcpu"] = state ? state.vcpu : undefined;
            inputs["video"] = state ? state.video : undefined;
            inputs["xml"] = state ? state.xml : undefined;
        } else {
            const args = argsOrState as DomainArgs | undefined;
            inputs["arch"] = args ? args.arch : undefined;
            inputs["autostart"] = args ? args.autostart : undefined;
            inputs["bootDevices"] = args ? args.bootDevices : undefined;
            inputs["cloudinit"] = args ? args.cloudinit : undefined;
            inputs["cmdlines"] = args ? args.cmdlines : undefined;
            inputs["consoles"] = args ? args.consoles : undefined;
            inputs["coreosIgnition"] = args ? args.coreosIgnition : undefined;
            inputs["cpu"] = args ? args.cpu : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["disks"] = args ? args.disks : undefined;
            inputs["emulator"] = args ? args.emulator : undefined;
            inputs["filesystems"] = args ? args.filesystems : undefined;
            inputs["firmware"] = args ? args.firmware : undefined;
            inputs["fwCfgName"] = args ? args.fwCfgName : undefined;
            inputs["graphics"] = args ? args.graphics : undefined;
            inputs["initrd"] = args ? args.initrd : undefined;
            inputs["kernel"] = args ? args.kernel : undefined;
            inputs["machine"] = args ? args.machine : undefined;
            inputs["memory"] = args ? args.memory : undefined;
            inputs["metadata"] = args ? args.metadata : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["networkInterfaces"] = args ? args.networkInterfaces : undefined;
            inputs["nvram"] = args ? args.nvram : undefined;
            inputs["qemuAgent"] = args ? args.qemuAgent : undefined;
            inputs["running"] = args ? args.running : undefined;
            inputs["tpm"] = args ? args.tpm : undefined;
            inputs["vcpu"] = args ? args.vcpu : undefined;
            inputs["video"] = args ? args.video : undefined;
            inputs["xml"] = args ? args.xml : undefined;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(Domain.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Domain resources.
 */
export interface DomainState {
    /**
     * The architecture for the VM (probably x8664 or i686),
     * you normally won't need to set this unless you are building a special VM
     */
    arch?: pulumi.Input<string>;
    /**
     * Set to `true` to start the domain on host boot up.
     * If not specified `false` is assumed.
     */
    autostart?: pulumi.Input<boolean>;
    /**
     * A list of devices (dev) which defines boot order. Example
     * below.
     */
    bootDevices?: pulumi.Input<pulumi.Input<inputs.DomainBootDevice>[]>;
    /**
     * The `libvirt.CloudInitDisk` disk that has to be used by
     * the domain. This is going to be attached as a CDROM ISO. Changing the
     * cloud-init won't cause the domain to be recreated, however the change will
     * have effect on the next reboot.
     */
    cloudinit?: pulumi.Input<string>;
    /**
     * Arguments to the kernel
     */
    cmdlines?: pulumi.Input<pulumi.Input<{[key: string]: any}>[]>;
    consoles?: pulumi.Input<pulumi.Input<inputs.DomainConsole>[]>;
    /**
     * The
     * [libvirt.Ignition](https://www.terraform.io/docs/providers/libvirt/r/coreos_ignition.html) resource
     * that is to be used by the CoreOS domain.
     */
    coreosIgnition?: pulumi.Input<string>;
    /**
     * Configures CPU mode. See below for more
     * details.
     */
    cpu?: pulumi.Input<inputs.DomainCpu>;
    /**
     * The description for domain.
     * Changing this forces a new resource to be created.
     * This data is not used by libvirt in any way, it can contain any information the user wants.
     */
    description?: pulumi.Input<string>;
    /**
     * An array of one or more disks to attach to the domain. The
     * `disk` object structure is documented below.
     */
    disks?: pulumi.Input<pulumi.Input<inputs.DomainDisk>[]>;
    /**
     * The path of the emulator to use
     */
    emulator?: pulumi.Input<string>;
    /**
     * An array of one or more host filesystems to attach to
     * the domain. The `filesystem` object structure is documented
     * below.
     */
    filesystems?: pulumi.Input<pulumi.Input<inputs.DomainFilesystem>[]>;
    /**
     * The UEFI rom images for exercising UEFI secure boot in a qemu
     * environment. Users should usually specify one of the standard _Open Virtual Machine
     * Firmware_ (_OVMF_) images available for their distributions. The file will be opened
     * read-only.
     */
    firmware?: pulumi.Input<string>;
    /**
     * The name of the firmware config path where ignition file is stored: default is `opt/com.coreos/config`. If you are using [Flatcar Linux](https://docs.flatcar-linux.org/os/booting-with-libvirt/#creating-the-domain-xml), the value is `opt/org.flatcar-linux/config`.
     */
    fwCfgName?: pulumi.Input<string>;
    graphics?: pulumi.Input<inputs.DomainGraphics>;
    /**
     * The path of the initrd to boot.
     */
    initrd?: pulumi.Input<string>;
    /**
     * The path of the kernel to boot
     */
    kernel?: pulumi.Input<string>;
    /**
     * The machine type,
     * you normally won't need to set this unless you are running on a platform that
     * defaults to the wrong machine type for your template
     */
    machine?: pulumi.Input<string>;
    /**
     * The amount of memory in MiB. If not specified the domain
     * will be created with 512 MiB of memory be used.
     */
    memory?: pulumi.Input<number>;
    metadata?: pulumi.Input<string>;
    /**
     * A unique name for the resource, required by libvirt.
     * Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * An array of one or more network interfaces to
     * attach to the domain. The `networkInterface` object structure is documented
     * below.
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<inputs.DomainNetworkInterface>[]>;
    /**
     * this block allows specifying the following attributes related to the _nvram_:
     */
    nvram?: pulumi.Input<inputs.DomainNvram>;
    /**
     * By default is disabled, set to true for enabling it. More info [qemu-agent](https://wiki.libvirt.org/page/Qemu_guest_agent).
     */
    qemuAgent?: pulumi.Input<boolean>;
    /**
     * Use `false` to turn off the instance. If not specified,
     * true is assumed and the instance, if stopped, will be started at next apply.
     */
    running?: pulumi.Input<boolean>;
    /**
     * TPM device to attach to the domain. The `tpm` object structure is documented below.
     */
    tpm?: pulumi.Input<inputs.DomainTpm>;
    /**
     * The amount of virtual CPUs. If not specified, a single CPU
     * will be created.
     */
    vcpu?: pulumi.Input<number>;
    video?: pulumi.Input<inputs.DomainVideo>;
    xml?: pulumi.Input<inputs.DomainXml>;
}

/**
 * The set of arguments for constructing a Domain resource.
 */
export interface DomainArgs {
    /**
     * The architecture for the VM (probably x8664 or i686),
     * you normally won't need to set this unless you are building a special VM
     */
    arch?: pulumi.Input<string>;
    /**
     * Set to `true` to start the domain on host boot up.
     * If not specified `false` is assumed.
     */
    autostart?: pulumi.Input<boolean>;
    /**
     * A list of devices (dev) which defines boot order. Example
     * below.
     */
    bootDevices?: pulumi.Input<pulumi.Input<inputs.DomainBootDevice>[]>;
    /**
     * The `libvirt.CloudInitDisk` disk that has to be used by
     * the domain. This is going to be attached as a CDROM ISO. Changing the
     * cloud-init won't cause the domain to be recreated, however the change will
     * have effect on the next reboot.
     */
    cloudinit?: pulumi.Input<string>;
    /**
     * Arguments to the kernel
     */
    cmdlines?: pulumi.Input<pulumi.Input<{[key: string]: any}>[]>;
    consoles?: pulumi.Input<pulumi.Input<inputs.DomainConsole>[]>;
    /**
     * The
     * [libvirt.Ignition](https://www.terraform.io/docs/providers/libvirt/r/coreos_ignition.html) resource
     * that is to be used by the CoreOS domain.
     */
    coreosIgnition?: pulumi.Input<string>;
    /**
     * Configures CPU mode. See below for more
     * details.
     */
    cpu?: pulumi.Input<inputs.DomainCpu>;
    /**
     * The description for domain.
     * Changing this forces a new resource to be created.
     * This data is not used by libvirt in any way, it can contain any information the user wants.
     */
    description?: pulumi.Input<string>;
    /**
     * An array of one or more disks to attach to the domain. The
     * `disk` object structure is documented below.
     */
    disks?: pulumi.Input<pulumi.Input<inputs.DomainDisk>[]>;
    /**
     * The path of the emulator to use
     */
    emulator?: pulumi.Input<string>;
    /**
     * An array of one or more host filesystems to attach to
     * the domain. The `filesystem` object structure is documented
     * below.
     */
    filesystems?: pulumi.Input<pulumi.Input<inputs.DomainFilesystem>[]>;
    /**
     * The UEFI rom images for exercising UEFI secure boot in a qemu
     * environment. Users should usually specify one of the standard _Open Virtual Machine
     * Firmware_ (_OVMF_) images available for their distributions. The file will be opened
     * read-only.
     */
    firmware?: pulumi.Input<string>;
    /**
     * The name of the firmware config path where ignition file is stored: default is `opt/com.coreos/config`. If you are using [Flatcar Linux](https://docs.flatcar-linux.org/os/booting-with-libvirt/#creating-the-domain-xml), the value is `opt/org.flatcar-linux/config`.
     */
    fwCfgName?: pulumi.Input<string>;
    graphics?: pulumi.Input<inputs.DomainGraphics>;
    /**
     * The path of the initrd to boot.
     */
    initrd?: pulumi.Input<string>;
    /**
     * The path of the kernel to boot
     */
    kernel?: pulumi.Input<string>;
    /**
     * The machine type,
     * you normally won't need to set this unless you are running on a platform that
     * defaults to the wrong machine type for your template
     */
    machine?: pulumi.Input<string>;
    /**
     * The amount of memory in MiB. If not specified the domain
     * will be created with 512 MiB of memory be used.
     */
    memory?: pulumi.Input<number>;
    metadata?: pulumi.Input<string>;
    /**
     * A unique name for the resource, required by libvirt.
     * Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * An array of one or more network interfaces to
     * attach to the domain. The `networkInterface` object structure is documented
     * below.
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<inputs.DomainNetworkInterface>[]>;
    /**
     * this block allows specifying the following attributes related to the _nvram_:
     */
    nvram?: pulumi.Input<inputs.DomainNvram>;
    /**
     * By default is disabled, set to true for enabling it. More info [qemu-agent](https://wiki.libvirt.org/page/Qemu_guest_agent).
     */
    qemuAgent?: pulumi.Input<boolean>;
    /**
     * Use `false` to turn off the instance. If not specified,
     * true is assumed and the instance, if stopped, will be started at next apply.
     */
    running?: pulumi.Input<boolean>;
    /**
     * TPM device to attach to the domain. The `tpm` object structure is documented below.
     */
    tpm?: pulumi.Input<inputs.DomainTpm>;
    /**
     * The amount of virtual CPUs. If not specified, a single CPU
     * will be created.
     */
    vcpu?: pulumi.Input<number>;
    video?: pulumi.Input<inputs.DomainVideo>;
    xml?: pulumi.Input<inputs.DomainXml>;
}
