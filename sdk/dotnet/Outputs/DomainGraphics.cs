// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Libvirt.Outputs
{

    [OutputType]
    public sealed class DomainGraphics
    {
        /// <summary>
        /// defaults to "yes"
        /// </summary>
        public readonly bool? Autoport;
        /// <summary>
        /// IP Address where the VNC listener should be started if
        /// `listen_type` is set to `address`. Defaults to 127.0.0.1
        /// </summary>
        public readonly string? ListenAddress;
        /// <summary>
        /// "listen type", defaults to "none"
        /// </summary>
        public readonly string? ListenType;
        /// <summary>
        /// Console device type. Valid values are "pty" and "tcp".
        /// </summary>
        public readonly string? Type;

        [OutputConstructor]
        private DomainGraphics(
            bool? autoport,

            string? listenAddress,

            string? listenType,

            string? type)
        {
            Autoport = autoport;
            ListenAddress = listenAddress;
            ListenType = listenType;
            Type = type;
        }
    }
}
