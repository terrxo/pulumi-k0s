// *** WARNING: this file was generated by pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.K0s.Outputs
{

    [OutputType]
    public sealed class ClusterKubeProxyIPTables
    {
        public readonly bool? MasqueradeAll;
        public readonly int? MasqueradeBit;
        public readonly string? MinSyncPeriod;
        public readonly string? SyncPeriod;

        [OutputConstructor]
        private ClusterKubeProxyIPTables(
            bool? masqueradeAll,

            int? masqueradeBit,

            string? minSyncPeriod,

            string? syncPeriod)
        {
            MasqueradeAll = masqueradeAll;
            MasqueradeBit = masqueradeBit;
            MinSyncPeriod = minSyncPeriod;
            SyncPeriod = syncPeriod;
        }
    }
}
