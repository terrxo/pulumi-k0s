// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.K0s.Outputs
{

    [OutputType]
    public sealed class Storage
    {
        public readonly Outputs.Etcd? Etcd;
        public readonly string? Type;

        [OutputConstructor]
        private Storage(
            Outputs.Etcd? etcd,

            string? type)
        {
            Etcd = etcd;
            Type = type;
        }
    }
}
