// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNetworkDnsHostTemplate(args: GetNetworkDnsHostTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkDnsHostTemplateResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("libvirt:index/getNetworkDnsHostTemplate:getNetworkDnsHostTemplate", {
        "hostname": args.hostname,
        "ip": args.ip,
    }, opts);
}

/**
 * A collection of arguments for invoking getNetworkDnsHostTemplate.
 */
export interface GetNetworkDnsHostTemplateArgs {
    hostname: string;
    ip: string;
}

/**
 * A collection of values returned by getNetworkDnsHostTemplate.
 */
export interface GetNetworkDnsHostTemplateResult {
    readonly hostname: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly ip: string;
    readonly rendered: {[key: string]: string};
}

export function getNetworkDnsHostTemplateOutput(args: GetNetworkDnsHostTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkDnsHostTemplateResult> {
    return pulumi.output(args).apply(a => getNetworkDnsHostTemplate(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkDnsHostTemplate.
 */
export interface GetNetworkDnsHostTemplateOutputArgs {
    hostname: pulumi.Input<string>;
    ip: pulumi.Input<string>;
}
